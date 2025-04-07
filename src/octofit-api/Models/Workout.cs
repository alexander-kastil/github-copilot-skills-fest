using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OctoFitApi;

public class Workout
{
    [Key]
    [JsonPropertyName("id")]
    public Guid Id { get; set; }

    [Required]
    [StringLength(100)]
    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;

    [JsonPropertyName("description")]
    public string? Description { get; set; }
}