using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OctoFitApi;

public class Activity
{
    [Key]
    [JsonPropertyName("id")]
    public Guid Id { get; set; }

    [Required]
    [JsonPropertyName("username")]
    public string Username { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [JsonPropertyName("email")]
    public string Email { get; set; } = string.Empty;

    [Required]
    [StringLength(100)]
    [JsonPropertyName("activityType")]
    public string ActivityType { get; set; } = string.Empty;

    [Required]
    [JsonPropertyName("duration")]
    public TimeSpan Duration { get; set; }
}