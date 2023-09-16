using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SamurAI_API.Data
{
    public class LabelResult
    {
        [Key]
        public int Id { get; set; }
        public Guid Uuid { get; set; }
        public string? Label { get; set; }
        public float? Percentage { get; set; }

        [ForeignKey("ModelResultId")]
        public int ModelResultId { get; set; }
        public ModelResult? ModelResult { get; set; }
    }
}
