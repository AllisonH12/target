#!/bin/bash

# Set Vercel token
VERCEL_TOKEN="4dAe2KjbfRiE7v8k0MU51uLF"

# Install Vercel CLI locally if not already installed
if ! [ -x "$(command -v ./node_modules/.bin/vercel)" ]; then
  echo "Installing Vercel CLI locally..."
  npm install --save-dev vercel
fi

# Create a vercel.json file if it doesn't exist
if [ ! -f "vercel.json" ]; then
  echo "Creating vercel.json configuration..."
  cat > vercel.json << EOF
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ]
}
EOF
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
echo "y" | ./node_modules/.bin/vercel --token "$VERCEL_TOKEN" --confirm --prod

echo "Deployment complete!"