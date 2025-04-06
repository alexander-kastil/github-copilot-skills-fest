namespace OctoFitApi;

public class Team
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public ICollection<User> Members { get; set; } = new List<User>();
}