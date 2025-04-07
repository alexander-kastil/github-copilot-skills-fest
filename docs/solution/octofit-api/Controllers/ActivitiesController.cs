using Microsoft.AspNetCore.Mvc;

namespace OctoFitApi;

[ApiController]
[Route("api/[controller]")]
public class ActivitiesController(OctoFitDbContext context) : BaseApiController<Activity>(context)
{
}