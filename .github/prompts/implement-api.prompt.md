# Implement the WebApi

1. Read the requirements mentioned in `docs/web-api.md` and understand the data models and the API structure.

2. If present, remove WeatherForecast related code from the project.

3. Create all models in the Models folder in the namespace OctoFitApi.

4. The backend will use Entity Framework Core and SQL Lite for the database:

- Use the existing model classes to deserialize the JSON data and do not handle relationships in Entity Framework.
- Enforce camelCase for serialization and deserialization.
- Add the Database Connection String to the octofit.db to appsettings.json and appsettings.Development.json files.
- The DatabaseContext class should be created in the Data folder and in namespace OctoFitApi.

6. Implement the controllers for each model according to the requirements in the Controllers folder and in the OctoFitApi namespace.

7. .Before starting the implementation, share your plan. Keep the order of the tasks. Don't proceed with the next activity until all of these steps are completed.
