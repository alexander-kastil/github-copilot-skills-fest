using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OctoFitApi;

public class User
{
    [Key]
    [JsonPropertyName("id")]
    public Guid Id { get; set; }

    [Required]
    [StringLength(100)]
    [JsonPropertyName("username")]
    public string Username { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [JsonPropertyName("email")]
    public string Email { get; set; } = string.Empty;

    [Required]
    [StringLength(100)]
    [JsonPropertyName("password")]
    public string Password { get; set; } = string.Empty;
}