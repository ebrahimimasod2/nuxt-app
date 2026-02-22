import { GoogleGenerativeAI } from '@google/generative-ai'
import { createClient } from '@supabase/supabase-js'
import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
import dotenv from 'dotenv'

dotenv.config()

// Initialize Google Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

/**
 * Clean HTML content and extract plain text
 */
function cleanHTML(html) {
  const $ = cheerio.load(html)
  
  // Remove script and style tags
  $('script, style, iframe, noscript').remove()
  
  // Get text content
  let text = $('body').text()
  
  // Clean up whitespace
  text = text
    .replace(/\s+/g, ' ')
    .replace(/\n+/g, '\n')
    .trim()
  
  return text
}

/**
 * Generate embeddings using Google Gemini
 */
async function generateEmbedding(text) {
  try {
    const model = genAI.getGenerativeModel({ model: 'text-embedding-004' })
    const result = await model.embedContent(text)
    return result.embedding.values
  } catch (error) {
    console.error('Error generating embedding:', error)
    throw error
  }
}

/**
 * Fetch WordPress posts
 */
async function fetchWordPressPosts(wordpressUrl, perPage = 10) {
  try {
    const response = await fetch(
      `${wordpressUrl}/wp-json/wp/v2/posts?per_page=${perPage}&_embed`
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const posts = await response.json()
    return posts
  } catch (error) {
    console.error('Error fetching WordPress posts:', error)
    throw error
  }
}

/**
 * Process a single post
 */
async function processPost(post) {
  try {
    console.log(`Processing: ${post.title.rendered}`)
    
    // Extract and clean content
    const cleanContent = cleanHTML(post.content.rendered)
    const cleanExcerpt = cleanHTML(post.excerpt.rendered)
    
    // Combine title, excerpt, and content for embedding
    const textForEmbedding = `${post.title.rendered}\n\n${cleanExcerpt}\n\n${cleanContent}`
    
    // Limit text length (Gemini has token limits)
    const truncatedText = textForEmbedding.slice(0, 10000)
    
    // Generate embedding
    console.log('Generating embedding...')
    const embedding = await generateEmbedding(truncatedText)
    
    // Prepare data for Supabase
    const postData = {
      wordpress_id: post.id,
      title: post.title.rendered,
      excerpt: cleanExcerpt,
      content: cleanContent,
      url: post.link,
      published_date: post.date,
      modified_date: post.modified,
      author_id: post.author,
      embedding: embedding,
      metadata: {
        categories: post.categories || [],
        tags: post.tags || [],
        featured_media: post.featured_media || null
      }
    }
    
    // Insert into Supabase
    const { data, error } = await supabase
      .from('wordpress_posts')
      .upsert(postData, {
        onConflict: 'wordpress_id'
      })
    
    if (error) {
      console.error('Error inserting into Supabase:', error)
      throw error
    }
    
    console.log(`✓ Successfully processed: ${post.title.rendered}`)
    return data
    
  } catch (error) {
    console.error(`Error processing post ${post.id}:`, error)
    throw error
  }
}

/**
 * Main ingestion function
 */
async function ingestWordPress() {
  try {
    const wordpressUrl = process.env.WORDPRESS_URL
    
    if (!wordpressUrl) {
      throw new Error('WORDPRESS_URL not set in environment variables')
    }
    
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY not set in environment variables')
    }
    
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
      throw new Error('Supabase credentials not set in environment variables')
    }
    
    console.log('Starting WordPress ingestion...')
    console.log(`Fetching posts from: ${wordpressUrl}`)
    
    // Fetch posts
    const posts = await fetchWordPressPosts(wordpressUrl, 10)
    console.log(`Found ${posts.length} posts`)
    
    // Process posts sequentially to avoid rate limits
    for (const post of posts) {
      await processPost(post)
      
      // Add delay to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    
    console.log('\n✓ Ingestion complete!')
    console.log(`Successfully processed ${posts.length} posts`)
    
  } catch (error) {
    console.error('Fatal error during ingestion:', error)
    process.exit(1)
  }
}

// Run the ingestion
ingestWordPress()
