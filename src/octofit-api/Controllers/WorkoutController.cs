using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace OctoFitApi;

[ApiController]
[Route("api/[controller]")]
public class WorkoutController(OctoFitDbContext dbContext) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Workout>>> GetAll()
    {
        return await dbContext.Workouts.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Workout>> GetById(Guid id)
    {
        var workout = await dbContext.Workouts.FindAsync(id);
        if (workout == null)
        {
            return NotFound();
        }
        return workout;
    }

    [HttpPost]
    public async Task<ActionResult<Workout>> Create(Workout workout)
    {
        dbContext.Workouts.Add(workout);
        await dbContext.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = workout.Id }, workout);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(Guid id, Workout workout)
    {
        if (id != workout.Id)
        {
            return BadRequest();
        }

        dbContext.Entry(workout).State = EntityState.Modified;

        try
        {
            await dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await dbContext.Workouts.AnyAsync(w => w.Id == id))
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
        var workout = await dbContext.Workouts.FindAsync(id);
        if (workout == null)
        {
            return NotFound();
        }

        dbContext.Workouts.Remove(workout);
        await dbContext.SaveChangesAsync();

        return NoContent();
    }
}