# OctoFit API Service

## Service Overview

### Purpose and Functionality
The OctoFit API is a .NET 9-based RESTful service that provides backend functionality for the OctoFit fitness tracking application. It handles user management, activity tracking, workout management, and leaderboard functionality.

### Key Features
- User management (CRUD operations)
- Activity logging and tracking
- Workout template management
- Leaderboard tracking
- RESTful API with Swagger documentation
- SQLite database with Entity Framework Core

### Tech Stack Breakdown
- .NET 9
- Entity Framework Core
- SQLite Database
- Swagger/OpenAPI
- JSON serialization with camelCase formatting
- CORS enabled for cross-origin requests

## Development Guide

### Prerequisites
- .NET 9 SDK
- Visual Studio Code or Visual Studio 2022
- SQLite tools (optional)

### DevContainer Configuration
The service is configured to run in a DevContainer with all necessary .NET tools and dependencies pre-installed.

### Build and Execution Instructions
1. Restore dependencies:
   ```bash
   dotnet restore
   ```

2. Build the project:
   ```bash
   dotnet build
   ```

3. Run the application:
   ```bash
   dotnet run
   ```

The API will be available at:
- HTTP: http://localhost:5000
- Swagger UI: http://localhost:5000/

### Dependencies
- OctoFit UI (Frontend application)

## Configuration Reference

| Config Key | Description | Required | Default | Example |
|------------|-------------|----------|---------|---------|
| ConnectionStrings:DefaultConnection | SQLite connection string | Yes | Data Source=octofit.db | Data Source=./octofit.db |
| Logging:LogLevel:Default | Default logging level | No | Information | Warning |
| AllowedHosts | CORS allowed hosts | No | * | * |

## API Endpoints

The API provides the following main endpoints:

### Users
- GET /api/users - Get all users
- GET /api/users/{id} - Get user by ID
- POST /api/users - Create new user
- PUT /api/users/{id} - Update user
- DELETE /api/users/{id} - Delete user

### Activities
- GET /api/activities - Get all activities
- GET /api/activities/{id} - Get activity by ID
- POST /api/activities - Create new activity
- PUT /api/activities/{id} - Update activity
- DELETE /api/activities/{id} - Delete activity

### Workouts
- GET /api/workouts - Get all workouts
- GET /api/workouts/{id} - Get workout by ID
- POST /api/workouts - Create new workout
- PUT /api/workouts/{id} - Update workout
- DELETE /api/workouts/{id} - Delete workout

### Leaderboards
- GET /api/leaderboards - Get all leaderboard entries
- GET /api/leaderboards/{id} - Get leaderboard entry by ID
- POST /api/leaderboards - Create new leaderboard entry
- PUT /api/leaderboards/{id} - Update leaderboard entry
- DELETE /api/leaderboards/{id} - Delete leaderboard entry