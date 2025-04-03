#!/bin/bash
set -e

echo "Post-creation setup starting..."

# Navigate to the workspace root
cd /workspace

# Create necessary directories
mkdir -p src/fitness-api/obj/Debug/net9.0
mkdir -p src/fitness-ui

# Set up .NET API project
echo "Installing .NET dependencies for fitness-api..."
cd src/fitness-api
dotnet restore
dotnet build

# Set up Angular UI project
echo "Installing npm dependencies for fitness-ui..."
cd ../fitness-ui
npm install

# Test GitHub CLI installation
echo "Testing GitHub CLI installation..."
if command -v gh &> /dev/null; then
    gh --version
else
    echo "GitHub CLI not found, skipping version check"
fi

echo "Development environment setup complete!"
echo "You can now run the API with: cd src/fitness-api && dotnet run"
echo "You can now run the UI with: cd src/fitness-ui && ng serve"
