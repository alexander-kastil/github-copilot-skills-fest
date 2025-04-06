# Getting started - app frontend and backend creation

## Explain to GitHub Copilot the Goals and Steps

I want to build an OctoFit Tracker app that will include the following:

- User authentication and profiles
- Activity logging and tracking
- Team creation and management
- Competitive leader board
- Personalized workout suggestions

## Technical Stack

Generate instructions in this order

1. Frontend and Backend Setup

   - Create a `src` directory for both projects
   - Create `src/octofit-api` for the .NET backend
   - Create `src/octofit-ui` for the Angular frontend

2. Backend Setup (.NET)

   - Use .NET 9 WebAPI template
   - Configure UseSwaggerUI to use an empty string route prefix in the Development environment
   - Add Entity Framework Core with SQLite
   - Configure ports: HTTPS (5001), HTTP (5000)
   - Enable CORS for all origins
   - Do not use app.UseHttpsRedirection();
   - Implement a .NET specific .gitignore file in the root of the project
   - Root namespace should be `OctoFitApi`

3. Frontend Setup (Angular)
   - Use Angular CLI 19.2 with Node 20.12.2
   - Include routing
   - Disable SSR
   - Use SCSS styling
   - Add environment configuration with API URL
   - Install and configure Bootstrap
   - Clean up default app component
   - Implement an Angular specific .gitignore file in the root of the project

Let's think about this step by step and generate the code in small steps.

## Task: Setup Coding Instructions & Tooling

### Coding Instructions

Add code generation instructions by creating .vscode/settings.json in the root of the project with the following content:

```json
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

Copy `docs/assets/prompts/*.prompt.md` to `.github/prompts/*.prompt.md`

### Register the Playwright MCP Server

Copy `docs/assets/mcp.json` to .vscode/mcp.json

## Task 2: Implement the Web Api

### SQLite Database, Entity Framework Core and Database Context

- This app is using a SQLite database using Entity Framework Core with a `OctoFitDbContext` class in the Data folder that will be registered in `Program.cs`. For simplicity, the database will be create in `src/octofit-api/octofit.db` path of the project. appsettings.json will be used to configure the database connection string. The database will be created automatically when the application starts.

The data models for the OctoFit Tracker consist of the following entities. The app does not use DTO's and the models are used directly in the API. The models are defined in the `Models` folder of the API project. The models are:

1. **User Model**

   - Unique identifier (GUID)
   - Username (required, max 100 characters)
   - Email address (required, valid email format)
   - Password (required, max 100 characters)

2. **Team Model**

   - Unique identifier (GUID)
   - Team name (required, max 100 characters)
   - Collection of team members (Users)

3. **Activity Model**

   - Unique identifier (GUID)
   - User reference (required, foreign key)
   - Activity type (required, max 100 characters)
   - Duration (required, TimeSpan)

4. **Leaderboard Model**

   - Unique identifier (GUID)
   - User reference (required, foreign key)
   - Score (required, integer)

5. **Workout Model**
   - Unique identifier (GUID)
   - Workout name (required, max 100 characters)
   - Workout description (optional)

Copy seeding data provided in `docs/assets/seeding_data.json` to the root of the project. Do not change any content of the file. Modify the \*.csproj file to include the seeding data in the project in an ItemGroup. For simplicity use the existing model classes to deserialize the JSON data and do not handle relationships in Entity Framework.

Our serialization format is camelCase. Configure it in Program.cs

- When creating the `OctoFitDbContext`, use `OnModelCreating` to configure the models and seed the database with the data from `seeding_data.json`.

- Implement other Entity Related Task in the `OctoFitDbContext` class if possible.

### Controller implementation

- The API will have a separate controllers for each model. The `OctoFitDbContext` will be injected in the constructor of each controller. For each controller, the following methods will be implemented using the above models:
- `GetAll` - Get all records of the model
- `GetById` - Get a record by id
- `Create` - Create a new record
- `Update` - Update an existing record
- `Delete` - Delete a record by id

## Task 3: Implement the Angular Frontend

### Home Component

- The home page will be implemented in the `src/octofit-ui/src/app/home` folder and will be available in the root path. The home page will display a welcome message and a centered image of the OctoFit logo. The image will be stored in the `src/octofit-ui/src/public` folder. The home page will be styled using Bootstrap and will be responsive.

### Artifacts Scaffolding

For each .net model, create a corresponding Angular client side model. Match the properties exactly using camelCase. Initialize each property. Example:

src/octofit-ui/src/app/user/user.model.ts

The Api will have two components for each model, each model having its on folder. There will be a base component that will display the data in a table and a edit component. Example:

src/octofit-ui/src/app/user/user.component.ts
src/octofit-ui/src/app/user/user-edit.component.ts

Each component will use a service that will use the Angular httpClient. Example: src/octofit-ui/src/app/user/user.service.ts

Each service will have the following methods:

- `getAll` - Get all records of the model
- `getById` - Get a record by id
- `create` - Create a new record
- `update` - Update an existing record
- `delete` - Delete a record by id

#### List Component

- The container component will display the data in a simple bootstrap striped table.

- The data from the service will be converted to a Signal using the toSignal function from the `@angular/core/rxjs-interop` package. The table displays the properties of the model and will have a button to edit the record. The button will navigate to the edit component using the routerLink directive.

- When creating a new record, pass a 0 id to the edit component. The edit component will create a new record and navigate back to the container component.

- To not create loading indicators, or extended error handling.

#### Edit Component

- The edit component will display a form with the properties of the model. The form will be implemented using the Reactive Forms module. The form will have a submit button that will call the create or update method of the service depending on the mode (create or edit). The form will be validated using Angular's built-in validators. Use the exact property name for the form controls.

- To get the value of the form use Component Input Binding: Here is an example of how to implement the UserEditComponent. The user will also available available as a signal as we are using declarative binding. As the user id is a signal, we use an effect to load the user data when the id changes.

Example:

```typescript
export class UserEditComponent {
  id = input<number>();
  service = inject(UserService);
  user = new User();

  userForm = this.fb.group({
    id: [this.user().id, Validators.required],
    userName: [this.user().userName, Validators.required],
    email: [this.user().email, [Validators.required, Validators.email]],
    password: [this.user().password, Validators.required],
    birthDate: [this.user().birthDate]
  });

  userUpdate = effect(() => {
    if (this.id()) {
      this.service.getById(this.id()).subscribe((user) => {
        this.userForm.patchValue(user);
      });
    }
  });
}
```

- Do not create loading indicators, or extended error handling.

### Routing

Implement routes for the list component and the edit component in app.routes.ts. The route for the list container should be the same as the model name. The route for the edit component should be the same as the model name with `/edit` suffix and an id parameter. Example: `/user` and `/user/edit/:id`.

Use Component Input Binding in app.routes.ts:

```typescript
provideRouter(routes, withComponentInputBinding()),
```

#### Navbar Component

- The navbar component will be implemented using the Angular CLI. The navbar will have links to all the list components. The navbar will be implemented in the app component and will be displayed on all pages and styled using Bootstrap.
