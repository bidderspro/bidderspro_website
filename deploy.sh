#!/bin/bash

echo "🚀 Starting static deployment for BiddersPro..."

# Install dependencies
npm install

# Build and export static version
npm run build
npx next export

# Ensure target directory exists
mkdir -p /var/www/bidderspro.com/out

# Set proper permissions
chmod -R 755 out/

# Copy exported files (overwrite, but don't delete folder)
cp -r out/* /var/www/bidderspro.com/out/

# Reload NGINX
sudo systemctl reload nginx

echo ""
echo "✅ Static deployment completed!"
echo "🌐 Website is now running from: /var/www/bidderspro.com/out"