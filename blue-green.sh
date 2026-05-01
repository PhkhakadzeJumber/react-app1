#!/bin/bash

echo "Starting Blue-Green Deployment..."

# Build new version
echo "Building new version..."
npm run build

# Simulate Blue and Green environments
if [ -d "blue" ]; then
  echo "Blue is active. Deploying to Green..."
  rm -rf green
  cp -r build green
  echo "Green deployment ready. Switching traffic to Green..."
  echo "green" > active_env.txt
  echo "Green is now active!"
else
  echo "No active environment. Deploying to Blue..."
  rm -rf blue
  cp -r build blue
  echo "blue" > active_env.txt
  echo "Blue is now active!"
fi