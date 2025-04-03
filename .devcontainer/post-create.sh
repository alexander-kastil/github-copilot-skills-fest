#!/bin/bash
set -e

echo "Post-creation setup starting..."

# Fix permissions for the workspace directory
echo "Setting correct permissions for workspace directory..."
sudo chown -R $(whoami):$(whoami) /workspace
sudo chmod -R 755 /workspace

# Navigate to the workspace root
cd /workspace

# Create necessary directories with proper permissions
mkdir -p src/fitness-api/obj/Debug/net9.0
chmod -R 777 src/fitness-api/obj

# Set up .NET API project
echo "Installing .NET dependencies for fitness-api..."
cd src/fitness-api
dotnet restore
dotnet build

# Set up Angular UI project
echo "Installing npm dependencies for fitness-ui..."
cd ../fitenss-ui
npm install

# Test GitHub CLI installation
echo "Testing GitHub CLI installation..."
gh --version

echo "Development environment setup complete!"
echo "You can now run the API with 'cd src/fitness-api && dotnet run'"
echo "You can now run the UI with 'cd src/fitenss-ui && ng serve'"
