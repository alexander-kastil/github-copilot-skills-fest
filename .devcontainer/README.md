# Development Container for Angular 19 and .NET 9

This development container provides a complete development environment for building applications with Angular 19 and .NET 9.

## Features

- .NET 9 SDK
- Node.js 20.12.2
- Angular CLI 19
- SQLite
- GitHub CLI
- VS Code Extensions for Angular and .NET development

## Prerequisites

- Docker Desktop
- Visual Studio Code
- VS Code Remote - Containers extension

## Usage

1. Clone your repository
2. Copy the `.devcontainer` directory to your project root
3. Open the project in VS Code
4. When prompted, click "Reopen in Container" or run the "Remote-Containers: Reopen in Container" command

## Container Contents

The development container includes:

- Base image: mcr.microsoft.com/devcontainers/dotnet:9.0
- Node.js 20.12.2 with latest npm
- Angular CLI 19
- SQLite for database operations
- GitHub CLI for repository management
- Preconfigured VS Code extensions and settings

## Customization

You can customize the development container by:

1. Modifying the `Dockerfile` to add additional tools
2. Updating the `devcontainer.json` to:
   - Add/remove VS Code extensions
   - Change port forwarding
   - Modify container settings

## Port Forwarding

The container forwards the following ports:

- 4200: Angular development server
- 5000: .NET API (HTTP)
- 5001: .NET API (HTTPS)

## Notes

- The container is configured with UTC timezone
- All necessary permissions are set for .NET and Node.js development
- VS Code settings are optimized for Angular and .NET development

## Getting Started

1. Open this folder in VS Code
2. When prompted, click "Reopen in Container"
3. Wait for the container to build (this may take a few minutes the first time)
4. Start developing!

## Available Commands

### Angular UI (within the src/fitenss-ui directory)

```bash
# Start the Angular development server
ng serve

# Generate new components, services, etc.
ng generate component my-component
```

### .NET API (within the src/fitness-api directory)

```
# Run the API
dotnet run

# Build the project
dotnet build
```

## Note

The Angular environments are already configured with apiUrl pointing to http://localhost:5000/, which is the default URL for the .NET API when running in development mode.
