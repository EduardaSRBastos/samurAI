using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SamurAI_API.Data
{
    public class TextResult
    {
        [Key]
        public int Id { get; set; }
        public Guid Uuid { get; set; }
        public string? SentenceText { get; set; }

        [ForeignKey("ModelResultId")]
        public int? ModelResultId { get; set; }
        public virtual ModelResult? ModelResult { get; set; }
    }
}
