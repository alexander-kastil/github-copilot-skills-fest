#!/bin/bash

echo "Post-creation setup starting..."

# Fix permissions for the workspace directory
echo "Setting correct permissions for workspace directory..."
sudo chown -R $(whoami):$(whoami) /workspace
sudo chmod -R 755 /workspace

# Navigate to the workspace root
cd /workspace