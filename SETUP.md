# Shanbe Global Intelligence Portal - Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install:
- `@google/generative-ai` - Google Gemini AI SDK
- `@supabase/supabase-js` - Supabase client
- `cheerio` - HTML parsing
- `node-fetch` - HTTP requests
- `dotenv` - Environment variables

### 2. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then fill in your credentials:

```env
# Google Gemini API Key (Free tier available)
GEMINI_API_KEY=your_gemini_api_key_here

# Supabase Configuration
SUPABASE_URL=your_supabase_url_here
SUPABASE_SERVICE_KEY=your_supabase_service_key_here

# WordPress URL
WORDPRESS_URL=https://your-wordpress-site.com
```

#### Getting API Keys:

**Google Gemini API Key (FREE):**
1. Go to https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key to your `.env` file

**Supabase:**
1. Go to https://supabase.com
2. Create a new project
3. Go to Settings > API
4. Copy the URL and service_role key

### 3. Database Setup (Supabase)

Create a table in Supabase for storing WordPress posts:

```sql
CREATE TABLE wordpress_posts (
  id BIGSERIAL PRIMARY KEY,
  wordpress_id INTEGER UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  url TEXT,
  published_date TIMESTAMP,
  modified_date TIMESTAMP,
  author_id INTEGER,
  embedding VECTOR(768),
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create index for vector similarity search
CREATE INDEX ON wordpress_posts USING ivfflat (embedding vector_cosine_ops);
```

### 4. Run the Application

**Development Mode:**
```bash
npm run dev
```

Visit http://localhost:3000

**Ingest WordPress Content:**
```bash
npm run ingest
```

This will:
1. Fetch posts from your WordPress site
2. Clean HTML content
3. Generate embeddings using Google Gemini
4. Store vectors in Supabase

## 📁 Project Structure

```
app/
├── layouts/
│   └── default.vue          # Main dashboard layout with sidebar
├── pages/
│   ├── index.vue            # News Pulse dashboard
│   ├── agents.vue           # Agent Marketplace
│   └── settings.vue         # Settings page
├── components/
│   └── ShanbeAgent.vue      # Chat agent component
└── assets/
    └── css/
        └── main.css         # Global styles

scripts/
└── ingest-wordpress.js      # WordPress ingestion script

server/
└── api/
    └── mockData.ts          # Mock startup data API
```

## 🎨 Features

### Dashboard Layout
- **Fixed Sidebar**: Navigation menu with News Pulse, Agent Marketplace, and Settings
- **Responsive**: Hamburger menu on mobile devices
- **Professional Theme**: Deep navy blue with gold/amber accents

### News Pulse (/)
- Live ecosystem updates
- Masonry grid of news cards
- Tag-based categorization
- Real-time statistics

### Agent Marketplace (/agents)
- 6 specialized AI agents
- Interactive chat interface
- Agent ratings and user counts
- Skill-based filtering

### WordPress Integration
- Automated content ingestion
- Vector embeddings with Google Gemini
- Semantic search capabilities
- Supabase vector storage

## 🔧 Technology Stack

- **Framework**: Nuxt 4 + Vue 3
- **UI**: Nuxt UI + Tailwind CSS
- **AI**: Google Gemini (text-embedding-004)
- **Database**: Supabase (PostgreSQL + pgvector)
- **Styling**: Inter font, custom color scheme

## 📝 Notes

- Google Gemini has a free tier with generous limits
- The embedding model `text-embedding-004` produces 768-dimensional vectors
- Rate limiting is implemented (1 second delay between posts)
- Content is truncated to 10,000 characters to respect token limits

## 🚨 Troubleshooting

**"GEMINI_API_KEY not set"**
- Make sure you created a `.env` file
- Verify the API key is correct

**"Error generating embedding"**
- Check your Gemini API quota
- Ensure the text isn't too long (max 10,000 chars)

**"Supabase error"**
- Verify your Supabase credentials
- Make sure the table exists
- Check if pgvector extension is enabled

## 📚 Additional Resources

- [Google Gemini API Docs](https://ai.google.dev/docs)
- [Supabase Vector Guide](https://supabase.com/docs/guides/ai/vector-columns)
- [Nuxt UI Documentation](https://ui.nuxt.com)
