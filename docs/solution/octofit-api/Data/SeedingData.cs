namespace OctoFitApi;

public class SeedingData
{
    public required List<User> Users { get; set; }
    public required List<Activity> Activities { get; set; }
    public required List<Leaderboard> LeaderboardEntries { get; set; }
    public required List<Workout> Workouts { get; set; }
}