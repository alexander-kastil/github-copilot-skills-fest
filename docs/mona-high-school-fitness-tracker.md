# Getting started - app frontend and backend creation

## General Coding Instructions & Tools

### Coding Instructions

Add code generation instructions by creating .vscode/settings.json in the root of the project with the following content:

```
{
    "github.copilot.chat.codeGeneration.instructions": [
        {
            "file": ".copilot.instructions.md"
        }
    ],
    "github.copilot.chat.setupTests.enabled": true,
    "github.copilot.chat.startDebugging.enabled": true,
    "chat.commandCenter.enabled": true
}
```

Copy `docs/assets/.copilot.instructions.md` to the root of the project.

### Add reusable prompts

Copy `docs/assets/create-docs.prompt.md` to .github/prompts/create-docs.prompt.md

### Register the Playwright MCP Server

Copy `docs/assets/mcp.json` to .vscode/mcp.json

## Explain to GitHub Copilot the Goals and Steps & Scaffold the Projects

```text
I want to build an monafit Tracker app that will include the following:

* User authentication and profiles
* Activity logging and tracking
* Team creation and management
* Competitive leader board
* Personalized workout suggestions

Generate instructions in this order

1. Create the frontend and backend in the monafit-tracker directory structure of this repository in one command
2. Setup backend (src/monafit-api) using .NET 9 and the dotnet cli using the webapi template
3. The webapi will use Entity Framework and SQL Lite for the database. The SQLite database monafit-db will be in root of the project. Include it in the csproj file. Set the project launch settings to use port 5001 for https and 5000 for http. Add a CORS policy to allow all origins and methods.
4. Scaffold the fontened in src/monafit-ui the directory using the Angular CLI 19.2 and Node 20.12.2. Add environment files using the Angular CLI and the `ng g environments` and add the following entry to both envrionments:  apiUrl: "http://localhost:5000/api/". Overwrite the content of the app.component.html with the text "Welcome to the Monafit Tracker App". Install bootstrap and import it to the styles array in angular.json

The directory tree for the monafit Tracker App

monafit-tracker
├── src
│   ├── monafit-api
│   │   ├── Controllers
│   │   │   ├── ExercisesController.cs
│   │   │   └── StudentsController.cs
│   │   ├── Models
│   │   │   ├── Exercise.cs
│   │   │   └── Student.cs
│   │   ├── Data
│   │   │   └── FitnessDbContext.cs
│   │   ├── Services
│   │   │   └── PlaywrightService.cs
│   │   ├── Tests
│   │   │   ├── Controllers
│   │   │   └── Services
│   │   ├── Program.cs
│   │   ├── appsettings.json
│   │   └── fitness-api.csproj
│   └── monafit-ui
│       ├── src
│       │   ├── app
│       │   │   ├── components
│       │   │   │   ├── exercises
│       │   │   │   │   ├── exercise-list
│       │   │   │   │   └── exercise-detail
│       │   │   │   └── students
│       │   │   │       ├── student-list
│       │   │   │       └── student-detail
│       │   │   ├── shared
│       │   │   │   ├── models
│       │   │   │   └── services



Layout the directory structure with no redundant backend and frontend subdirectories

Let's think about this step by step
```

## Implement the Web Api
