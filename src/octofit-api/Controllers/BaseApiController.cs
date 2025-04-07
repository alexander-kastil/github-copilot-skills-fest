using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace OctoFitApi;

public abstract class BaseApiController<T> : ControllerBase where T : class
{
    protected readonly OctoFitDbContext _context;
    protected readonly DbSet<T> _dbSet;

    protected BaseApiController(OctoFitDbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }

    [HttpGet]
    public virtual async Task<ActionResult<IEnumerable<T>>> GetAll()
    {
        return await _dbSet.ToListAsync();
    }

    [HttpGet("{id}")]
    public virtual async Task<ActionResult<T>> GetById(Guid id)
    {
        var entity = await _dbSet.FindAsync(id);
        if (entity == null)
        {
            return NotFound();
        }
        return entity;
    }

    [HttpPost]
    public virtual async Task<ActionResult<T>> Create(T entity)
    {
        _dbSet.Add(entity);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = ((dynamic)entity).Id }, entity);
    }

    [HttpPut("{id}")]
    public virtual async Task<IActionResult> Update(Guid id, T entity)
    {
        if (id.ToString() != ((dynamic)entity).Id.ToString())
        {
            return BadRequest();
        }

        _context.Entry(entity).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await EntityExists(id))
            {
                return NotFound();
            }
            throw;
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public virtual async Task<IActionResult> Delete(Guid id)
    {
        var entity = await _dbSet.FindAsync(id);
        if (entity == null)
        {
            return NotFound();
        }

        _dbSet.Remove(entity);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    protected async Task<bool> EntityExists(Guid id)
    {
        return await _dbSet.FindAsync(id) != null;
    }
}