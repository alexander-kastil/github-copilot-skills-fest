# Scaffold octofit-api project and set up defaults

1. Create a webapi using .NET 9 and the dotnet cli in /src: dotnet new webapi -n octofit-api.

2. Add the following nuget packages to the project using `dotnet add package`:

- Microsoft.EntityFrameworkCore" Version="9.0.3"
- Microsoft.EntityFrameworkCore.Sqlite" Version="9.0.3"
- Swashbuckle.AspNetCore" Version="8.1.0"

3. Start with enforcing namespace OctoFitApi as RootNamespace in `*.csproj`.

Make sure to add the using directives for the packages in the `Program.cs` file.

4.Set the project launch settings to use port 5001 for https and 5000 for http.

5.Add a CORS policy to allow all origins and methods.

6.In Program.cs add configuration for the SwaggerUI to be visible at the root url "/".

7.Remove app.UseHttpsRedirection();

8.Before starting the implementation, share your plan. Keep the order of the tasks. Don't proceed with the next activity until all of these steps are completed.
