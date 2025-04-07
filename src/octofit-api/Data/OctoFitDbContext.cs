using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace OctoFitApi;

public class OctoFitDbContext : DbContext
{
    public OctoFitDbContext(DbContextOptions<OctoFitDbContext> options) : base(options) { }

    public DbSet<User> Users => Set<User>();
    public DbSet<Activity> Activities => Set<Activity>();
    public DbSet<Leaderboard> Leaderboards => Set<Leaderboard>();
    public DbSet<Workout> Workouts => Set<Workout>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var seedingData = JsonSerializer.Deserialize<SeedingData>(
            File.ReadAllText("seeding_data.json"),
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            }
        ) ?? throw new InvalidOperationException("Failed to load seeding data");

        modelBuilder.Entity<User>().HasData(seedingData.Users);
        modelBuilder.Entity<Activity>().HasData(seedingData.Activities);
        modelBuilder.Entity<Leaderboard>().HasData(seedingData.LeaderboardEntries);
        modelBuilder.Entity<Workout>().HasData(seedingData.Workouts);
    }
}