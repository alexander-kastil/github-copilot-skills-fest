# Build applications with GitHub Copilot agent mode

This repository a guide to Vibe Coding using GitHub Copilot for a fitness application. It contains a [prompt list](prompts/readme.md) to fulfill the [goals](goal/readme.md) of the [Microsoft Skills Fest](https://aiskillsfest.event.microsoft.com/)

- [ ] **Task 1**: [Project Setup including a devcontainer.json](prompts/readme.md#task-1-project-setup)
- [ ] **Task 2**: [Implement the Web Api using Vibe Coding](prompts/readme.md#task-2-configure-the-web-api)
- [ ] **Task 3**: [Implement the Angular App using Vibe Coding](prompts/readme.md#task-3-configure-the-angular-app)
- [ ] **Task 4**: [Add project documentation using a reusable prompt](prompts/readme.md#task-4-add-project-documentation-using-a-reusable-prompt)
- [ ] **Task 5**: [Implement & Integrate a Playwright MCP (Model Context Protocol) Service](prompts/readme.md#task-5-implement--integrate-a-playwright-mcp-model-context-protocol-service)
- [ ] **Task 6**: [Implement tests using Vibe Coding](prompts/readme.md#task-6-implement-tests-using-vibe-coding)
- [ ] **Task 7**: [Implement Bicep in infra folder using Vibe Coding](prompts/readme.md#task-7-implement-bicep-in-infra-folder-using-vibe-coding)
- [ ] **Task 8**: [Add a CI/CD pipeline using Azure DevOps](prompts/readme.md#task-8-add-a-cicd-pipeline-using-azure-devops)

> Note: Task 6-8 are not included in this repository and are not part of this session. They are [GitHub Issues](https://github.com/alexander-kastil/copilot-skills-fest/issues) waiting to be addressed.

## Project Overview

The Fitness App is a comprehensive solution for managing students and their exercise routines. It consists of a .NET 9 Web API backend and an Angular 19 frontend, providing a seamless experience for users.

![app](/prompts/images/app.jpg)

### Project Purpose and Objectives

- Simplify the management of student data and exercise tracking.
- Provide a responsive and user-friendly interface.
- Ensure scalability and maintainability with modern technologies.

### High-Level Architecture Diagram

```
[Browser] <--> [Fitness UI (Angular)] <--> [Fitness API (.NET)] <--> [SQLite Database]
```

### Key Technologies and Frameworks

- Angular 19
- .NET 9

### Project Structure

```
.
├── .ado/          # Azure DevOps pipeline configurations
├── infra/         # Infrastructure as Code and deployment scripts
└── src/           # Source code and services
    ├── fitness-api/  # Backend API
    └── fitenss-ui/   # Frontend application
```

## Quick Start Guide

### Prerequisites

- Node.js 20.12.2 or higher
- Angular CLI 19
- .NET 9 SDK

### Development Setup Instructions

1. Clone the repository.
2. Navigate to the `src/fitness-api` directory and run `dotnet run` to start the backend.
3. Navigate to the `src/fitenss-ui` directory and run `ng serve -o` to start the frontend.

## Contributing

Feel free to contribute. When contribute implement your changes / additions on a feature branch in your fork and issue a pull request after completion. An introduction video into forks and pull requests can be found [here](https://www.youtube.com/watch?v=nT8KGYVurIU)

## License & Re-Use

This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License

Permission is hereby granted to to use, modify, and distribute the workshop materials provided under the following conditions:

- Personal Use: Users may use the materials for personal learning and educational purposes.
- Modification: Users may modify the materials to suit their needs.
- Non-Commercial Use: Commercial use by other trainers or organizations is strictly prohibited.
- Attribution: Users must give appropriate credit to the author and include a link to the original materials.
- Share-Alike: Any derivative works based on these materials must be shared under the same license terms.

For commercial use please contact the author via [LinkedIn](https://www.linkedin.com/in/alexander-kastil-3bb26511a/) or [email](mailto:alexander.kastil@integrations.at)
