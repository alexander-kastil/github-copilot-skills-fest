using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace OctoFitApi;

[ApiController]
[Route("api/[controller]")]
public class TeamController(OctoFitDbContext dbContext) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Team>>> GetAll()
    {
        return await dbContext.Teams.Include(t => t.Members).ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Team>> GetById(Guid id)
    {
        var team = await dbContext.Teams.Include(t => t.Members).FirstOrDefaultAsync(t => t.Id == id);
        if (team == null)
        {
            return NotFound();
        }
        return team;
    }

    [HttpPost]
    public async Task<ActionResult<Team>> Create(Team team)
    {
        dbContext.Teams.Add(team);
        await dbContext.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = team.Id }, team);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(Guid id, Team team)
    {
        if (id != team.Id)
        {
            return BadRequest();
        }

        dbContext.Entry(team).State = EntityState.Modified;

        try
        {
            await dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await dbContext.Teams.AnyAsync(t => t.Id == id))
            {
                return NotFound();
            }
            throw;
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var team = await dbContext.Teams.FindAsync(id);
        if (team == null)
        {
            return NotFound();
        }

        dbContext.Teams.Remove(team);
        await dbContext.SaveChangesAsync();

        return NoContent();
    }
}