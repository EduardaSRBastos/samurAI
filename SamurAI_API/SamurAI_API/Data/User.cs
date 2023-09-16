using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace SamurAI_API.Data
{
    public class User : IdentityUser<int>
    {
        public Guid Uuid { get; set; }
    }
}
