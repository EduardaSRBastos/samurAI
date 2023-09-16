using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SamurAI_API.Data;
using SamurAI_API.Data.Context;

namespace SamurAI_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LabelResultsController : ControllerBase
    {
        private readonly SamurAIContext _context;

        public LabelResultsController(SamurAIContext context) => _context = context;

        [HttpGet]
        public async Task<IEnumerable<LabelResult>> GetLabelResults()
        {
            return await _context.LabelResults.Include(lr => lr.ModelResult).ToListAsync();
        }


        [HttpGet("{id}")]
        [ProducesResponseType(typeof(LabelResult), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetLabelResultById(int id)
        {
            var labelResult = await _context.LabelResults.Include(lr => lr.ModelResult).FirstOrDefaultAsync(lr => lr.Id == id);

            if (labelResult == null)
            {
                return NotFound();
            }

            return Ok(labelResult);
        }

        [HttpPost("insert")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> InsertLabelResult(LabelResult labelResult)
        {
            await _context.LabelResults.AddAsync(labelResult);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLabelResultById), new { id = labelResult.Id }, labelResult);
        }

        [HttpPut("update/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> UpdateLabelResult(int id, LabelResult updatedLabelResult)
        {
            if (id != updatedLabelResult.Id) return BadRequest();

            var existingLabelResult = await _context.LabelResults.FindAsync(id);

            if (existingLabelResult == null)
            {
                return NotFound();
            }

            // Manually update the properties of the existing entity with the new values
            existingLabelResult.Label = updatedLabelResult.Label;
            existingLabelResult.Percentage = updatedLabelResult.Percentage;
            existingLabelResult.ModelResultId = updatedLabelResult.ModelResultId;

            // Save the changes to the database
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("remove/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> RemoveLabelResult(int id)
        {
            var labelToRemove = await _context.LabelResults.FindAsync(id);

            if (labelToRemove == null) return NotFound();

            _context.LabelResults.Remove(labelToRemove);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
