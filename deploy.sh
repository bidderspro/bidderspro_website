#!/bin/bash

# Stop the existing PM2 process if it exists
pm2 stop bidderspro || true
pm2 delete bidderspro || true

# Install dependencies
npm install

# Build the application
npm run build

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

echo "Deployment completed successfully!" 