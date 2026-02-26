#!/bin/bash

# Create directories
mkdir -p certbot/conf certbot/www

# Start nginx without SSL first (for certificate challenge)
cat > nginx-init.conf << 'EOF'
events {
    worker_connections 1024;
}
http {
    server {
        listen 80;
        server_name web-builder.ir www.web-builder.ir;
        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }
        location / {
            return 200 'OK';
        }
    }
}
EOF

# Run temporary nginx
docker run -d --name nginx-init \
    -p 80:80 \
    -v $(pwd)/nginx-init.conf:/etc/nginx/nginx.conf:ro \
    -v $(pwd)/certbot/www:/var/www/certbot \
    nginx:alpine

# Get SSL certificate
docker run --rm \
    -v $(pwd)/certbot/conf:/etc/letsencrypt \
    -v $(pwd)/certbot/www:/var/www/certbot \
    certbot/certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email your-email@example.com \
    --agree-tos \
    --no-eff-email \
    -d web-builder.ir \
    -d www.web-builder.ir

# Stop temporary nginx
docker stop nginx-init && docker rm nginx-init
rm nginx-init.conf

echo "SSL certificate obtained! Now run: docker compose up -d --build"
