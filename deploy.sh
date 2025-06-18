#!/bin/bash

# Stop the existing PM2 process if it exists
pm2 stop bidderspro || true
pm2 delete bidderspro || true

# Install dependencies
npm install

# Build the application for standalone deployment
npm run build:server

# Copy public and static files to standalone directory
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

echo "Deployment completed successfully!" 