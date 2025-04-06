using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace OctoFitApi;

[ApiController]
[Route("api/[controller]")]
public class LeaderboardController(OctoFitDbContext dbContext) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Leaderboard>>> GetAll()
    {
        return await dbContext.LeaderboardEntries.Include(l => l.User).ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Leaderboard>> GetById(Guid id)
    {
        var leaderboard = await dbContext.LeaderboardEntries.Include(l => l.User).FirstOrDefaultAsync(l => l.Id == id);
        if (leaderboard == null)
        {
            return NotFound();
        }
        return leaderboard;
    }

    [HttpPost]
    public async Task<ActionResult<Leaderboard>> Create(Leaderboard leaderboard)
    {
        dbContext.LeaderboardEntries.Add(leaderboard);
        await dbContext.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = leaderboard.Id }, leaderboard);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(Guid id, Leaderboard leaderboard)
    {
        if (id != leaderboard.Id)
        {
            return BadRequest();
        }

        dbContext.Entry(leaderboard).State = EntityState.Modified;

        try
        {
            await dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await dbContext.LeaderboardEntries.AnyAsync(l => l.Id == id))
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
        var leaderboard = await dbContext.LeaderboardEntries.FindAsync(id);
        if (leaderboard == null)
        {
            return NotFound();
        }

        dbContext.LeaderboardEntries.Remove(leaderboard);
        await dbContext.SaveChangesAsync();

        return NoContent();
    }
}