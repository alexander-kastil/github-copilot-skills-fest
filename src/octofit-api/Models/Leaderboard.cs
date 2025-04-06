namespace OctoFitApi;

public class Leaderboard
{
    public Guid Id { get; set; }
    public required Guid UserId { get; set; }
    public required int Score { get; set; }
    public User? User { get; set; }
}