using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OctoFitApi;

public class Leaderboard
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
    [JsonPropertyName("score")]
    public int Score { get; set; }
}