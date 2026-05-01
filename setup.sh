#!/bin/bash

echo "Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "Installing dependencies..."
npm install

echo "Running tests..."
npm test -- --watchAll=false

echo "Building app..."
npm run build

echo "Done! Environment is ready."