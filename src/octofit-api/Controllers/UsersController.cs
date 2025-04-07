using Microsoft.AspNetCore.Mvc;

namespace OctoFitApi;

[ApiController]
[Route("api/[controller]")]
public class UsersController(OctoFitDbContext context) : BaseApiController<User>(context)
{
}