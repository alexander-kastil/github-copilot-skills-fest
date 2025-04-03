# Stop on first error
$ErrorActionPreference = "Stop"

Write-Host "Post-creation setup starting..."

# Navigate to the workspace root
Set-Location /workspace

# Test GitHub CLI installation
Write-Host "Testing GitHub CLI installation..."
gh --version