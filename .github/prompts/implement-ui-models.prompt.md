# Implement the Angular UI

1. Read the goals of docs/octofit_story.md in mind.

2. Read the requirements mentioned in docs/angular-ui.md.

3. Implement the HomeComponent which will be the entry point of the application.

4. Implement the client side models as classes for each entity. The models will be created in the `src/octofit-ui/src/app/{model}` folder.

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

5. For each model implement a service in the `src/octofit-ui/src/app/{model}` folder. The service will use the Angular HttpClient to communicate with the API. The service will have the following methods:

   - `getAll` - Get all records of the model
   - `getById` - Get a record by id
   - `create` - Create a new record
   - `update` - Update an existing record
   - `delete` - Delete a record by id

6. Before starting the implementation, share your plan. Keep the order of the tasks. Don't proceed with the next activity until all of these steps are completed.
