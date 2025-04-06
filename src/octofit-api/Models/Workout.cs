namespace OctoFitApi;

public class Workout
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }
}