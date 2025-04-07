using Microsoft.AspNetCore.Mvc;

namespace OctoFitApi;

[ApiController]
[Route("api/[controller]")]
public class WorkoutsController(OctoFitDbContext context) : BaseApiController<Workout>(context)
{
}