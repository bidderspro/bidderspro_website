#!/bin/bash

echo "🚀 Starting dual deployment (Server + Static)..."

# Stop PM2 processes (if any running)
pm2 stop bidderspro || true
pm twice delete bidderspro || true

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build both server and static versions
echo "🏗️ Building server version..."
npm run build:server

echo "🏗️ Building static version..."
npm run build:static

# Copy static files to deployment directory
echo "📁 Copying static files..."
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

# Copy server files for PM2
echo "🖥️ Preparing server files..."
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

echo "✅ Dual deployment completed!"
echo "📁 Static files: /var/www/bidderspro.com/out"
echo "🖥️ Server files: .next/standalone/"
echo ""
echo "Choose deployment mode:"
echo "  Static: sudo ./deploy-static.sh"
echo "  Server: sudo ./deploy-server.sh" 