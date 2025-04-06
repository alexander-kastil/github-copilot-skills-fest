using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace OctoFitApi;

[ApiController]
[Route("api/[controller]")]
public class ActivityController(OctoFitDbContext dbContext) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Activity>>> GetAll()
    {
        return await dbContext.Activities.Include(a => a.User).ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetById(Guid id)
    {
        var activity = await dbContext.Activities.Include(a => a.User).FirstOrDefaultAsync(a => a.Id == id);
        if (activity == null)
        {
            return NotFound();
        }
        return activity;
    }

    [HttpPost]
    public async Task<ActionResult<Activity>> Create(Activity activity)
    {
        dbContext.Activities.Add(activity);
        await dbContext.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = activity.Id }, activity);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(Guid id, Activity activity)
    {
        if (id != activity.Id)
        {
            return BadRequest();
        }

        dbContext.Entry(activity).State = EntityState.Modified;

        try
        {
            await dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await dbContext.Activities.AnyAsync(a => a.Id == id))
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
        var activity = await dbContext.Activities.FindAsync(id);
        if (activity == null)
        {
            return NotFound();
        }

        dbContext.Activities.Remove(activity);
        await dbContext.SaveChangesAsync();

        return NoContent();
    }
}