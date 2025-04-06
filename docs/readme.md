# Prompt list

- **Task 1**: Work with GitHub
- **Task 2**: Setup Coding Instructions & Tooling
- **Task 3**: Scaffold project structure
- **Task 4**: Implement the .NET Web API
- **Task 5**: Implement the Angular Frontend

The Tasks were executed by the GutHub Copilot Agent mostly using Claude Sonnet 3.5 with these [Visual Studio Code Settings](/prompts/assets/general/settings.json)

![settings](./images/agent.jpg)

## Task 1: Work with GitHub

This task is an introduction to using GitHub Copilot in a collaborative environment. It covers creation of a branch, committing changes and creating pull requests.

```prompt
Create a new branch 'initial-setup' and switch to it
```

> Note: At the end of task 3 we will merge the branch into main.

## Task 2: Setup Coding Instructions & Tooling

This task install some Copilot Settings and Tools and establishes the foundation for our fitness tracking application according to `docs/octofit_story.md`

```prompt
Setup the coding instructions and tooling for the project mentioned in docs/mona-high-school-fitness-tracker.md. Do not change any content of the files you copy. Stop after scaffolding the projects.
```

- Create a development container configuration for consistent environments and easy onboarding of new team members by attaching the re-usable prompt `create-dev-container.prompt.md` with the paperclip icon in the GitHub Copilot chat:

> Note: Skip this step as we have already created the devcontainer.json to meet our 45 min time limit. Building the container image takes a while. The prompt is included for reference.

```prompt
Create the devcontainer for the project.
```

- Run the `devcontainer` locally using `Dev Containers: Open Workspace in Container`. This will build the container image and start the container.

- Run the `devcontainer` in `GitHub CodeSpaces`: Codespaces: Connect to Codespace. This will create a new Codespace and open the project in the container.

## Task 3: Scaffold project structure

Create both the .NET API and Angular frontend projects according to the guides in `docs/mona-high-school-fitness-tracker.md`.

It includes setting up proper project structures, defining development environments with devcontainer configurations, and establishing basic project hygiene like source control settings.

- Get a big picture of the project using the `docs/octofit_story.md` and `docs/mona-high-school-fitness-tracker.md` files:

  ```prompt
  Read the files docs/octofit_story.md and docs/mona-high-school-fitness-tracker.md and summarize the requirements of the project. Do not implement anything yet. Just get an overview of the requirements. Draw a directory tree of the project.
  ```

- Initial prompt to set up both .NET and Angular projects:

  ```prompt
  Execute the steps mentioned in 'Task: Scaffold Projects' of docs/mona-high-school-fitness-tracker.md. Stop after this section.
  ```

- Check the outcome of the scaffolding process. Run the `octofit-api`

  ```prompt
  The octofit-api is already running. Navigate to `http://localhost:5000/` using the browser and describe the result. Check if the default WeatherForecast method is present. Navigate to http://localhost:5000/weatherforecast and describe the json.
  ```

## Task 4: Implement the .NET Web API

This task focuses on setting up the back-end API functionality including data models, controllers, and database integration. It establishes the core business logic and data access layer that will serve student and exercise data to the Angular frontend. Details are defined in `docs/mona-high-school-fitness-tracker.md`

```prompt
Implement the requirements mentioned in '## Task: Implement the Web Api' of docs/mona-high-school-fitness-tracker.md. Do nothing else and stop after this section. Before starting the implementation, share your plan. Complete you work by running 'dotnet build' and fix all errors.
```

> Note: This prompt is also available in `.github/prompts/implement-api.prompt.md`.

## Task 5: Implement the Angular Frontend

This task implements the front-end user interface by creating Angular components, services, and routing configurations. It establishes the connection between the Angular app and the .NET API, ensuring proper data display and user interaction.

- Creating the component structure and navigation for the Angular app:

  ```prompt
  Add the following components to the Angular app:

  - Home
  - Students
  - Exercises
  - Shared/Navbar

  Add the links to the Navbar and the routing to the app.routing.ts.
  Add a router-outlet to the app.component.html. The Navbar should have 100px. The container for the router-outlet should fit the rest of the screen
  ```

- Add a service to the Angular app that uses the HttpClient to call the API.

- Implementing API communication services in Angular:

  ```prompt
  Add a students service to the Angular app that uses the HttpClient to call the API. Register the HttpClient in app.config.ts using the provide function. Implement the methods getStudent and getStudents. Create client side model classes that match the API models. Update the hadrdcoded implementation of the Students component to use the service. Fix the template and use Control Flow syntax
  ```

- Adding CORS configuration to the API:

  ```prompt
  In the api Program.cs add a CORS rule to allow all request form all domains on all methods
  ```

- Troubleshooting data display issues:

  ```prompt
  there are no students displayed on the page. data is returned. Angular Dev Tools show the following state as in the screenshot
  ```

- Adding diagnostic logging to fix data display issues:

  ```prompt
  still no output so please add terminal logging to the students component so you can examine it and fix the error
  ```

## Task 6: Add project documentation using a reusable prompt

This task improves the project's documentation by leveraging reusable GitHub Copilot prompts. It demonstrates how to create, attach, and utilize custom prompts to generate comprehensive documentation for the application.

- Create docs using a saved prompt in `.github/prompts/*.prompt.md`

  ![prompt](./images/docs.jpg)

- Attach the prompt

  ![attach](./images/attach.jpg)

- Use the attached prompt to create the documentation

  ![prompt](./images/use-prompt.jpg)

## Task 6: Implement & Integrate a Playwright MCP (Model Context Protocol) Service

This task enhances the development workflow by adding Playwright MCP capabilities that allow GitHub Copilot to interact with the application through a browser. It demonstrates the power of AI-assisted development with visual context awareness for more sophisticated application testing and development.

- Add Playwright to `.vscode/mcp.json` in the fitness-ui project. This will allow the agent to interact with the application using the browser. We could also install Playwright in the root project.

  ```json
  {
      "servers": {
          "playwright": {
              "command": "npx",
              "args": [
                  "@playwright/mcp@latest",
                  "--vision"
              ]
          }
      }
  }
  ```

- Restart the tools using the command palette. This will install Playwright and start the MCP server.

  ![restart-tools](./images/restart-tools.jpg)

- Check if the tools are available by clicking on `Select tools` in your agents control center

  ![check-tools](./images/check-tools.jpg)

- Check if the tools are working correctly:

  ```prompt
  Navigate to http://localhost:4200/ and describe the result. Do nothing else.
  ```
