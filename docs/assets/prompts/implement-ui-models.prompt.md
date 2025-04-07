# Implement the Angular UI

1. Implement the HomeComponent in `src/octofit-ui/src/app/home` which will be the entry point of the application. The home page will display a welcome message and a centered image of the OctoFit logo. Copy docs/assets/images/octofit-logo.png to the `src/octofit-ui/public/` folder.

2. Add the following item to `angular.json`:

```
"assets":
[
   {
      "glob": "**/*",
      "input": "public",
      "output": "/assets/"
   }
],
```

2. Create a NavbarComponent and add a link to the HomeComponent. Replace the following code in the `src/octofit-ui/src/app/app.component.html` file with the Navbar:

   ```html
   <div class="text-center">
      <h1>Welcome to the OctoFit Tracker App</h1>
   </div>
   ```

3. Configure routing in `app.routes.ts`. Add a route "" for the HomeComponent

4. Implement the client side models as classes for each entity. The models will be created in the `src/octofit-ui/src/app/{model}/{model}.ts` folder.

   ```models
   **User Model**
   - Unique identifier (GUID)
   - Username (required, max 100 characters)
   - Email address (required, valid email format)
   - Password (required, max 100 characters)

   **Activity Model**
   - Unique identifier (GUID)
   - User Name (required)
   - Email address (required, valid email format)
   - Activity type (required, max 100 characters)
   - Duration (required, TimeSpan)

   **Leaderboard Model**
   - Unique identifier (GUID)
   - User Name (required)
   - Email address (required, valid email format)
   - Score (required, integer)

   **Workout Model**
   - Unique identifier (GUID)
   - Workout name (required, max 100 characters)
   - Workout description (optional)
   ```

5. For each model implement a service in the `src/octofit-ui/src/app/{model}/{service}` folder. The service will use the Angular HttpClient to communicate with the API. The service will have the following methods:

   - `getAll` - Get all records of the model
   - `getById` - Get a record by id
   - `create` - Create a new record
   - `update` - Update an existing record
   - `delete` - Delete a record by id

6. Before starting the implementation, share your plan. Keep the order of the tasks. Do not implement anything that you are not asked for. Don't proceed with the next activity until all of these steps are completed.
