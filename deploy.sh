#!/bin/bash

# Stop PM2 processes (if any running)
pm2 stop bidderspro || true
pm2 delete bidderspro || true

# Install dependencies
npm install

# Build static export (creates 'out' folder)
npm run build

# Set proper permissions for static files
chmod -R 755 out/

# Create backup of current deployment (optional)
if [ -d "/var/www/bidderspro.com/out.backup" ]; then
    rm -rf /var/www/bidderspro.com/out.backup
fi

if [ -d "/var/www/bidderspro.com/out" ]; then
    mv /var/www/bidderspro.com/out /var/www/bidderspro.com/out.backup
fi

# Copy new static files
cp -r out /var/www/bidderspro.com/

# Reload nginx to serve static files
sudo systemctl reload nginx

echo "Static deployment completed successfully!"
echo "Website is now running from: /var/www/bidderspro.com/out" 