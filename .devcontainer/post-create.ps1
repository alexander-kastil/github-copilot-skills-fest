# Stop on first error
$ErrorActionPreference = "Stop"

Write-Host "Post-creation setup starting..."

# Navigate to the workspace root
Set-Location /workspace

# Create necessary directories
New-Item -Path "src/fitness-api/obj/Debug/net9.0" -ItemType Directory -Force
New-Item -Path "src/fitness-ui" -ItemType Directory -Force

# Set up .NET API project
Write-Host "Installing .NET dependencies for fitness-api..."
Set-Location src/fitness-api
dotnet restore
dotnet build

# Set up Angular UI project
Write-Host "Installing npm dependencies for fitness-ui..."
Set-Location ../fitness-ui
npm install

# Test GitHub CLI installation
Write-Host "Testing GitHub CLI installation..."
gh --version

Write-Host "Development environment setup complete!"
Write-Host "You can now run the API with 'cd src/fitness-api && dotnet run'"
Write-Host "You can now run the UI with 'cd src/fitness-ui && ng serve'"