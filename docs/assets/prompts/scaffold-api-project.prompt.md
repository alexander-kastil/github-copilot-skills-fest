# Scaffold octofit-api project and set up defaults

1. Create the .NET backend in the src directory.
2. Scaffold the backend (src/octofit-api) using .NET 9 and the dotnet cli using: dotnet new webapi -n octofit-api.
3. In Programm.cs add configuration for the SwaggerUI should to be visible at / implemented in the Swashbuckle.AspNetCore package
4. The backend will use Entity Framework Core and SQL Lite for the database. Add the packages `Microsoft.EntityFrameworkCore` and `Microsoft.EntityFrameworkCore.Sqlite`
5. Set the project launch settings to use port 5001 for https and 5000 for http.
6. Add a CORS policy to allow all origins and methods.
