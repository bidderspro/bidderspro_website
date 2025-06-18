#!/bin/bash

echo "🖥️ Deploying in SERVER mode..."

# Update nginx config for server mode
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

# Test and reload nginx
nginx -t && systemctl reload nginx

# Start PM2 server
pm2 start ecosystem.config.js
pm2 save

echo "✅ Server mode deployed!"
echo "🌐 Website: http://bidderspro.com"
echo "🖥️ Server running on: http://localhost:3000"
echo "📊 PM2 status: pm2 status" 