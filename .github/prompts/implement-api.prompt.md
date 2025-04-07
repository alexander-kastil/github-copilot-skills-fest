# Implement the WebApi

1. Read the requirements mentioned in `docs/web-api.md` and understand the data models and the API structure.

2. If present, remove WeatherForecast related code from the project.

3. Create all models in the Models folder in the namespace OctoFitApi:

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

4. The backend will use Entity Framework Core and SQL Lite for the database:

- Use the existing model classes to deserialize the JSON data and do not handle relationships in Entity Framework.
- Enforce camelCase for serialization and deserialization.
- The OctoFitDbContext class should be created in the Data folder and in namespace OctoFitApi.
- Ensure the the database will be created in the root of the project using
- Add the Database Connection String to the octofit.db to appsettings.json and appsettings.Development.json files. The database will be created in the root of the project.
- Copy `docs/assets/seeding_data.json` to the root of the project and use it to seed the database. Make sure the casing between camlCase and PascalCase is consistent with the model classes. If not add annotations to the model classes to enforce the casing. Seed the Database using the `OnModelCreating` method in the OctofitDataContext class. Use a class SeedingDataModel

6. Implement the controllers for each model according to the requirements in the Controllers folder and in the OctoFitApi namespace.

7. Before starting the implementation, share your plan. Keep the order of the tasks. Don't proceed with the next activity until all of these steps are completed.
