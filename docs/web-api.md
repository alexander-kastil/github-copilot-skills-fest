# Implement the Web Api

## SQLite Database, Entity Framework Core and Database Context

The webapi will created in the `octofit-api` folder.

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
