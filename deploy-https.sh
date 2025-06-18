#!/bin/bash

echo "🔒 Deploying with HTTPS..."
echo "Choose mode:"
echo "1) Static HTTPS"
echo "2) Server HTTPS"
read -p "Enter choice (1 or 2): " choice

if [ "$choice" = "1" ]; then
    echo "📁 Setting up Static HTTPS..."
    
    # Create HTTPS config for static
    cat > /etc/nginx/sites-available/bidderspro.com << 'EOF'
server {
    listen 80;
    server_name bidderspro.com www.bidderspro.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name bidderspro.com www.bidderspro.com;
    
    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;
    
    root /var/www/bidderspro.com/out;
    index index.html index.htm;

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    location ~* \.(css|js|png|jpg|jpeg|gif|svg|ico|woff2)$ {
        expires 30d;
        add_header Cache-Control "public";
    }
}
EOF
    
    pm2 stop bidderspro || true
    pm2 delete bidderspro || true

elif [ "$choice" = "2" ]; then
    echo "🖥️ Setting up Server HTTPS..."
    
    # Create HTTPS config for server
    cat > /etc/nginx/sites-available/bidderspro.com << 'EOF'
server {
    listen 80;
    server_name bidderspro.com www.bidderspro.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name bidderspro.com www.bidderspro.com;
    
    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;
    
    root /var/www/bidderspro.com;
    index index.html index.htm;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF
    
    pm2 start ecosystem.config.js
    pm2 save
fi

# Create SSL certificate if it doesn't exist
if [ ! -f "/etc/nginx/ssl/nginx.crt" ]; then
    echo "🔐 Creating SSL certificate..."
    mkdir -p /etc/nginx/ssl
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout /etc/nginx/ssl/nginx.key \
        -out /etc/nginx/ssl/nginx.crt \
        -subj "/C=US/ST=State/L=City/O=Organization/CN=bidderspro.com"
fi

# Test and reload nginx
nginx -t && systemctl reload nginx

echo "✅ HTTPS deployment completed!"
echo "🌐 Website: https://bidderspro.com" 