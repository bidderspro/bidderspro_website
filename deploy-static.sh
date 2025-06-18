#!/bin/bash

echo "📁 Deploying in STATIC mode..."

# Stop PM2 (not needed for static)
pm2 stop bidderspro || true
pm2 delete bidderspro || true

# Update nginx config for static mode
cat > /etc/nginx/sites-available/bidderspro.com << 'EOF'
server {
    listen 80;
    server_name bidderspro.com www.bidderspro.com;
    root /var/www/bidderspro.com/out;

    index index.html index.htm;

    # Handle client-side routing
    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    # Static file caching
    location ~* \.(css|js|png|jpg|jpeg|gif|svg|ico|woff2)$ {
        expires 30d;
        add_header Cache-Control "public";
    }
}
EOF

# Test and reload nginx
nginx -t && systemctl reload nginx

echo "✅ Static mode deployed!"
echo "🌐 Website: http://bidderspro.com"
echo "📁 Serving from: /var/www/bidderspro.com/out" 