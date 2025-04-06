using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace OctoFitApi;

public class OctoFitDbContext : DbContext
{
    public OctoFitDbContext(DbContextOptions<OctoFitDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Team> Teams { get; set; }
    public DbSet<Activity> Activities { get; set; }
    public DbSet<Leaderboard> LeaderboardEntries { get; set; }
    public DbSet<Workout> Workouts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure max length constraints
        modelBuilder.Entity<User>().Property(u => u.Username).HasMaxLength(100);
        modelBuilder.Entity<User>().Property(u => u.Email).HasMaxLength(100);
        modelBuilder.Entity<User>().Property(u => u.Password).HasMaxLength(100);
        modelBuilder.Entity<Team>().Property(t => t.Name).HasMaxLength(100);
        modelBuilder.Entity<Activity>().Property(a => a.ActivityType).HasMaxLength(100);
        modelBuilder.Entity<Workout>().Property(w => w.Name).HasMaxLength(100);

        // Seed data from seeding_data.json
        var seedingData = JsonSerializer.Deserialize<SeedingData>(
            File.ReadAllText("seeding_data.json"),
            new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
        );

        if (seedingData != null)
        {
            modelBuilder.Entity<User>().HasData(seedingData.Users);
            modelBuilder.Entity<Team>().HasData(seedingData.Teams);
            modelBuilder.Entity<Activity>().HasData(seedingData.Activities);
            modelBuilder.Entity<Leaderboard>().HasData(seedingData.LeaderboardEntries);
            modelBuilder.Entity<Workout>().HasData(seedingData.Workouts);
        }
    }
}

// Class to deserialize seeding data
public class SeedingData
{
    public List<User> Users { get; set; } = new();
    public List<Team> Teams { get; set; } = new();
    public List<Activity> Activities { get; set; } = new();
    public List<Leaderboard> LeaderboardEntries { get; set; } = new();
    public List<Workout> Workouts { get; set; } = new();
}