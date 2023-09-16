using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SamurAI_API.Data;
using SamurAI_API.Data.Context;

namespace SamurAI_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TextResultsController : ControllerBase
    {
        private readonly SamurAIContext _context;

        public TextResultsController(SamurAIContext context) => _context = context;

        [HttpGet]
        public async Task<IEnumerable<TextResult>> GetTextResults()
        {
            return await _context.TextResults.Include(lr => lr.ModelResult).ToListAsync();
        }


        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TextResult), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetTextResultById(int id)
        {
            var TextResult = await _context.TextResults.Include(lr => lr.ModelResult).FirstOrDefaultAsync(lr => lr.Id == id);

            if (TextResult == null)
            {
                return NotFound();
            }

            return Ok(TextResult);
        }

        [HttpPost("insert")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> InsertTextResult(TextResult TextResult)
        {
            await _context.TextResults.AddAsync(TextResult);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTextResultById), new { id = TextResult.Id }, TextResult);
        }

        [HttpPut("update/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> UpdateTextResult(int id, TextResult updatedTextResult)
        {
            if (id != updatedTextResult.Id) return BadRequest();

            var existingTextResult = await _context.TextResults.FindAsync(id);

            if (existingTextResult == null)
            {
                return NotFound();
            }

            // Manually update the properties of the existing entity with the new values
            existingTextResult.SentenceText = updatedTextResult.SentenceText;
            existingTextResult.ModelResultId = updatedTextResult.ModelResultId;

            // Save the changes to the database
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("remove/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> RemoveTextResult(int id)
        {
            var TextToRemove = await _context.TextResults.FindAsync(id);

            if (TextToRemove == null) return NotFound();

            _context.TextResults.Remove(TextToRemove);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
