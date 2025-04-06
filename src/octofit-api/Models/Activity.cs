namespace OctoFitApi;

public class Activity
{
    public Guid Id { get; set; }
    public required Guid UserId { get; set; }
    public required string ActivityType { get; set; }
    public required TimeSpan Duration { get; set; }
    public User? User { get; set; }
}