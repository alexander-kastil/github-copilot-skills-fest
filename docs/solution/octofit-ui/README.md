# OctoFit UI Service

## Service Overview

### Purpose and Functionality

The OctoFit UI is an Angular 19-based frontend application that provides the user interface for the OctoFit fitness tracking application. It offers a responsive, modern interface for managing users, tracking activities, managing workouts, and viewing leaderboards.

### Key Features

- Responsive web interface using Bootstrap
- Standalone components architecture
- Declarative data handling with Angular Signals
- Component-based routing
- CRUD operations for all entities
- Modern Angular control flow

### Tech Stack Breakdown

- Angular 19
- TypeScript
- Bootstrap CSS framework
- RxJS with Angular Signals
- Reactive Forms
- Angular HTTP Client

## Development Guide

### Prerequisites

- Node.js 20.12.2
- Angular CLI 19.2
- Visual Studio Code

### DevContainer Configuration

The service is configured to run in a DevContainer with all necessary Node.js tools and dependencies pre-installed.

### Build and Execution Instructions

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   ng serve
   ```

The application will be available at http://localhost:4200

### Dependencies

- OctoFit API (Backend service)

## Configuration Reference

| Config Key | Description     | Required | Default                    | Example                     |
| ---------- | --------------- | -------- | -------------------------- | --------------------------- |
| apiUrl     | Backend API URL | Yes      | http://localhost:5000/api/ | http://api.example.com/api/ |

## Component Structure

### Core Components

#### Home Component

- Entry point of the application
- Displays welcome message and app logo

#### Navbar Component

- Provides navigation across the application
- Responsive Bootstrap-based design

### Feature Components

#### Users Module

- UsersComponent: Displays user list in a table
- UserEditComponent: Form for creating/editing users

#### Activities Module

- ActivitiesComponent: Shows activity tracking table
- ActivityEditComponent: Form for logging/editing activities

#### Workouts Module

- WorkoutsComponent: Lists available workout templates
- WorkoutEditComponent: Form for creating/editing workouts

#### Leaderboard Module

- LeaderboardComponent: Displays fitness achievement rankings

### Services

Each feature module includes a service that handles API communication:

- UserService
- ActivityService
- WorkoutService
- LeaderboardService

All services follow a consistent pattern with these operations:

- getAll(): Retrieves all records
- getById(id: string): Retrieves a single record
- create(entity: T): Creates a new record
- update(id: string, entity: T): Updates an existing record
- delete(id: string): Removes a record

## Development Standards

- Uses standalone components
- Implements Angular Control Flow syntax
- Uses Angular inject() function for dependency injection
- Converts Observables to Signals using toSignal()
- Follows camelCase naming convention
- Uses Angular environment configuration
