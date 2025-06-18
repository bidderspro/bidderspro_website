#!/bin/bash

echo "🚀 BiddersPro Deployment Script"
echo "================================"

# Function to create SSL certificate
create_ssl_cert() {
    if [ ! -f "/etc/nginx/ssl/nginx.crt" ]; then
        echo "🔐 Creating SSL certificate..."
        mkdir -p /etc/nginx/ssl
        openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
            -keyout /etc/nginx/ssl/nginx.key \
            -out /etc/nginx/ssl/nginx.crt \
            -subj "/C=US/ST=State/L=City/O=Organization/CN=bidderspro.com"
    fi
}

# Stop PM2 processes
pm2 stop bidderspro || true
pm2 delete bidderspro || true

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build both versions
echo "🏗️ Building server version..."
npm run build:server

echo "🏗️ Building static version..."
npm run build:static

# Prepare static files
echo "📁 Preparing static files..."
chmod -R 755 out/

# Create backup of current static deployment
if [ -d "/var/www/bidderspro.com/out.backup" ]; then
    rm -rf /var/www/bidderspro.com/out.backup
fi

if [ -d "/var/www/bidderspro.com/out" ]; then
    mv /var/www/bidderspro.com/out /var/www/bidderspro.com/out.backup
fi

# Copy new static files
cp -r out /var/www/bidderspro.com/

# Prepare server files
echo "🖥️ Preparing server files..."
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

echo ""
echo "✅ Build completed! Choose deployment mode:"
echo "1) Static HTTP  (Fast, no server needed)"
echo "2) Server HTTP  (Dynamic features, PM2 required)"
echo "3) Static HTTPS (Fast + Secure)"
echo "4) Server HTTPS (Dynamic + Secure)"
echo ""
read -p "Enter choice (1-4): " choice

case $choice in
    1)
        echo "📁 Deploying Static HTTP..."
        cat > /etc/nginx/sites-available/bidderspro.com << 'EOF'
server {
    listen 80;
    server_name bidderspro.com www.bidderspro.com;
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
        ;;
    2)
        echo "🖥️ Deploying Server HTTP..."
        cat > /etc/nginx/sites-available/bidderspro.com << 'EOF'
server {
    listen 80;
    server_name bidderspro.com www.bidderspro.com;
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
        ;;
    3)
        echo "🔒📁 Deploying Static HTTPS..."
        create_ssl_cert
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
        ;;
    4)
        echo "🔒🖥️ Deploying Server HTTPS..."
        create_ssl_cert
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
        ;;
    *)
        echo "❌ Invalid choice. Exiting..."
        exit 1
        ;;
esac

# Test and reload nginx
echo "🔧 Testing nginx configuration..."
nginx -t && systemctl reload nginx

echo ""
echo "✅ Deployment completed successfully!"
echo "🌐 Website URL:"
if [[ $choice == "3" || $choice == "4" ]]; then
    echo "   https://bidderspro.com"
else
    echo "   http://bidderspro.com"
fi

if [[ $choice == "2" || $choice == "4" ]]; then
    echo "🖥️ Server mode: PM2 is running the Node.js server"
    echo "📊 Check status: pm2 status"
else
    echo "📁 Static mode: Files served directly by nginx"
fi

echo "📁 Static files location: /var/www/bidderspro.com/out"
echo ""
echo "🔄 To change mode, run: ./deploy.sh" 