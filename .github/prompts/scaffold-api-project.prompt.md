# Scaffold octofit-api project and set up defaults

1. Create the .NET backend using .NET 9 and the dotnet cli in /src: dotnet new webapi -n octofit-api.

2. Start with enforcing namespace OctoFitApi as RootNamespace in the project file. Add the using to the Program.cs file.

3. Add the following packages to the project:

- Swashbuckle.AspNetCore
- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Sqlite

Make sure to add the using directives for the packages in the `Program.cs` file.

4.In Program.cs add configuration for the SwaggerUI to be visible at the root url "/".

5.Set the project launch settings to use port 5001 for https and 5000 for http.

6.Add a CORS policy to allow all origins and methods.

7.Before starting the implementation, share your plan. Keep the order of the tasks.

8.Remove app.UseHttpsRedirection();

9.Copy docs/assets/octofit.db to the root of the project.

9.Do nothing else and stop after this section.
