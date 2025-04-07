# OctoFit Application Overview

## Application Description
OctoFit is a comprehensive fitness tracking application designed for high school students. It consists of two main services working together to provide a complete fitness tracking solution.

## Services Overview

### OctoFit API (octofit-api/)
A .NET 9-based RESTful API service that manages the backend functionality.
- **Technology Stack**: .NET 9, Entity Framework Core, SQLite
- **Primary Functions**: User management, activity tracking, workout management, leaderboard tracking
- **Port**: 5000 (HTTP)
- **Documentation**: See [octofit-api/README.md](./octofit-api/README.md) for detailed documentation

### OctoFit UI (octofit-ui/)
An Angular 19-based frontend application providing the user interface.
- **Technology Stack**: Angular 19, TypeScript, Bootstrap
- **Primary Functions**: User interface for managing users, activities, workouts, and viewing leaderboards
- **Port**: 4200 (HTTP)
- **Documentation**: See [octofit-ui/README.md](./octofit-ui/README.md) for detailed documentation

## Service Interaction
- The UI service communicates with the API service using HTTP requests
- All data is exchanged in JSON format with camelCase property naming
- CORS is configured to allow cross-origin requests in development
- Both services are containerized and can be run using DevContainer configuration

## Development Environment
Both services are configured to run in a DevContainer environment with all necessary tools and dependencies pre-installed. The development environment provides:
- .NET 9 SDK for API development
- Node.js 20.12.2 for Angular development
- SQLite for database management
- VS Code extensions for both Angular and .NET development