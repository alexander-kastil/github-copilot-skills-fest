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

## Explain to GitHub Copilot the Goals and Steps

```text
I want to build an OctoFit Tracker app that will include the following:

* User authentication and profiles
* Activity logging and tracking
* Team creation and management
* Competitive leader board
* Personalized workout suggestions
```

## Scaffolding

Generate instructions in this order

1. Create the Angular Frontend and .NET backend in the src directory.
2. Scaffold the backend (src/octofit-api) using .NET 9 and the dotnet cli using the webapi template. Do not use the minimal api. Create explicit controller files in the Controllers folder. In the development environment, the Swagger UI should be visible at /.
3. The webapi will use Entity Framework and SQL Lite for the database. Add the required Packages.
4. The SQLite database octofit-db will be in root of the webapi project. Include it in the \*.csproj file.
5. Set the project launch settings to use port 5001 for https and 5000 for http. Add a CORS policy to allow all origins and methods.
6. Scaffold the octofit-ui to src using the Angular CLI 19.2 and Node 20.12.2 using ng new octofit-ui --routing --ssr=false --style=scss . Add environment files using the Angular CLI and the `ng g environments` and add the following entry to both envrionments: apiUrl: "http://localhost:5000/api/". Install bootstrap and import it to the styles array in angular.json in the build and test configuration. Delete the content of the app.component.html and the text "Welcome to the OctoFit Tracker App" in a div.

Let's think about this step by step and generate the code in small steps.

## Implement the Web Api
