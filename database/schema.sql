-- Enable pgvector extension for vector similarity search
CREATE EXTENSION IF NOT EXISTS vector;

-- Create wordpress_posts table
CREATE TABLE IF NOT EXISTS wordpress_posts (
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
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_wordpress_posts_wordpress_id ON wordpress_posts(wordpress_id);
CREATE INDEX IF NOT EXISTS idx_wordpress_posts_published_date ON wordpress_posts(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_wordpress_posts_metadata ON wordpress_posts USING GIN(metadata);

-- Create index for vector similarity search using IVFFlat
-- Note: You may need to adjust lists parameter based on your data size
-- Rule of thumb: lists = rows / 1000 for up to 1M rows
CREATE INDEX IF NOT EXISTS idx_wordpress_posts_embedding ON wordpress_posts 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_wordpress_posts_updated_at 
BEFORE UPDATE ON wordpress_posts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Create function for semantic search
CREATE OR REPLACE FUNCTION search_wordpress_posts(
  query_embedding VECTOR(768),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 10
)
RETURNS TABLE (
  id BIGINT,
  wordpress_id INTEGER,
  title TEXT,
  excerpt TEXT,
  url TEXT,
  published_date TIMESTAMP,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    wp.id,
    wp.wordpress_id,
    wp.title,
    wp.excerpt,
    wp.url,
    wp.published_date,
    1 - (wp.embedding <=> query_embedding) AS similarity
  FROM wordpress_posts wp
  WHERE 1 - (wp.embedding <=> query_embedding) > match_threshold
  ORDER BY wp.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Create view for recent posts
CREATE OR REPLACE VIEW recent_wordpress_posts AS
SELECT 
  id,
  wordpress_id,
  title,
  excerpt,
  url,
  published_date,
  metadata
FROM wordpress_posts
ORDER BY published_date DESC
LIMIT 50;

-- Grant permissions (adjust role name as needed)
-- GRANT ALL ON wordpress_posts TO your_role_name;
-- GRANT EXECUTE ON FUNCTION search_wordpress_posts TO your_role_name;

-- Sample query to test semantic search:
-- SELECT * FROM search_wordpress_posts(
--   (SELECT embedding FROM wordpress_posts WHERE id = 1),
--   0.7,
--   5
-- );
