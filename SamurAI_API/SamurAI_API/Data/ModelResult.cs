using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SamurAI_API.Data
{
    public class ModelResult
    {
        [Key]
        public int Id { get; set; }
        public Guid Uuid { get; set; }
        public string? ModelName { get; set; }

        public virtual ICollection<LabelResult>? Labels { get; set; }

    }
}
