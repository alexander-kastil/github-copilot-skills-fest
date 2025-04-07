using Microsoft.AspNetCore.Mvc;

namespace OctoFitApi;

[ApiController]
[Route("api/[controller]")]
public class LeaderboardsController(OctoFitDbContext context) : BaseApiController<Leaderboard>(context)
{
}