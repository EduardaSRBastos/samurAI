using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SamurAI_API.Data;
using SamurAI_API.Data.Context;

namespace SamurAI_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModelResultsController : ControllerBase
    {
        private readonly SamurAIContext _context;

        public ModelResultsController(SamurAIContext context) => _context = context;

        [HttpGet]
        public async Task<IEnumerable<ModelResult>> GetModelResults()
        {
            return await _context.ModelResults.Include(m => m.Labels).ToListAsync();
        }


        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ModelResult), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetModelResultById(int id)
        {
            var modelResult = await _context.ModelResults.FindAsync(id);

            if (modelResult == null)
            {
                return NotFound();
            }

            await _context.Entry(modelResult).Collection(m => m.Labels).LoadAsync();

            return Ok(modelResult);
        }

        [HttpPost("insert")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> InsertModelResult(ModelResult modelResult)
        {
            await _context.ModelResults.AddAsync(modelResult);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetModelResultById), new {id = modelResult.Id}, modelResult);
        }

        [HttpPut("update/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> UpdateModelResult(int id, ModelResult updatedModelResult)
        {
            if (id != updatedModelResult.Id) return BadRequest();

            var existingModelResult = await _context.ModelResults.FindAsync(id);

            if (existingModelResult == null)
            {
                return NotFound();
            }

            // Manually update the properties of the existing entity with the new values
            existingModelResult.ModelName = updatedModelResult.ModelName;

            // Save the changes to the database
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("remove/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> RemoveModelResult(int id)
        {
            var modelToRemove = await _context.ModelResults.FindAsync(id);

            if (modelToRemove == null) return NotFound();

            _context.ModelResults.Remove(modelToRemove);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
