# Implement the WebApi

1. Read the requirements mentioned in '# Implement the Web Api' of docs/web-api.md.

2. Remove the WeatherForecastController and WeatherForecast.cs files from the project.

3. Create all models in the Models folder. Keep the namespace OctoFitApi.

4. Copy the seeding data provided in `docs/assets/seeding_data.json` to the root of the project. Do not change any content of the file. Modify the \*.csproj file to include the seeding data in the project in an ItemGroup.

5. The backend will use Entity Framework Core and SQL Lite for the database:

- Use the existing model classes to deserialize the JSON data and do not handle relationships in Entity Framework.
- Add the Database Connection String in the appsettings.json and appsettings.Development.json files.
- The DatabaseContext class should be created in the Data folder and in namespace OctoFitApi.
- Implement the seeding of data in the DatabaseContext class.
- The seeding should be done in the constructor of the DatabaseContext class.
- The database should be created automatically when the application starts the project root `octofit.db`
  ```
  public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
  {
      Database.EnsureCreated();
      SeedData();
  }
  ```

6. Implement the controllers for each model according to the requirements in the Controllers folder and in the OctoFitApi namespace.

7. Before starting the implementation, share your plan. Keep the order of the tasks.

8. Do nothing else and stop after this section.
