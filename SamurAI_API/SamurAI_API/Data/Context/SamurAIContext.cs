using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace SamurAI_API.Data.Context
{
    public class SamurAIContext : IdentityDbContext<User, IdentityRole<int>, int>
    {
        public SamurAIContext(DbContextOptions<SamurAIContext> options) : base(options)
        {

        }

        public DbSet<ModelResult> ModelResults { get; set; }
        public DbSet<TextResult> TextResults { get; set; }
        public DbSet<LabelResult> LabelResults { get; set; }
        public new DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ModelResult>().Property(x => x.Uuid).HasDefaultValue(Guid.NewGuid());
            modelBuilder.Entity<TextResult>().Property(x => x.Uuid).HasDefaultValue(Guid.NewGuid());
            modelBuilder.Entity<LabelResult>().Property(x => x.Uuid).HasDefaultValue(Guid.NewGuid());
            modelBuilder.Entity<User>().Property(x => x.Uuid).HasDefaultValue(Guid.NewGuid());

            modelBuilder.Entity<ModelResult>().HasMany(m => m.Labels).WithOne(l => l.ModelResult).HasForeignKey(l => l.ModelResultId);

            modelBuilder.Entity<ModelResult>().HasData(
                new ModelResult { Id = 1, ModelName = "SVM", Uuid = Guid.NewGuid() },
                new ModelResult { Id = 2, ModelName = "Random Forest", Uuid = Guid.NewGuid() },
                new ModelResult { Id = 3, ModelName = "Gradient Boosting", Uuid = Guid.NewGuid() }
                );

            modelBuilder.Entity<TextResult>().HasData(
                new TextResult { Id = 1, SentenceText = "That is why you earn less than a man!", ModelResultId = 1, Uuid = Guid.NewGuid() },
                new TextResult { Id = 2, SentenceText = "I need a gif of a cat laughing.", ModelResultId = 2, Uuid = Guid.NewGuid() },
                new TextResult { Id = 3, SentenceText = "Look that school boy, is crazy.", ModelResultId = 3, Uuid = Guid.NewGuid() }
                );

            modelBuilder.Entity<LabelResult>().HasData(
               new LabelResult { Id = 1, Label = "Ethnicity", Percentage = 96.74F, ModelResultId = 1, Uuid = Guid.NewGuid() },
               new LabelResult { Id = 2, Label = "Other Cyberbullying", Percentage = 1.90F, ModelResultId = 1, Uuid = Guid.NewGuid() },
               new LabelResult { Id = 3, Label = "Not Cyberbullying", Percentage = 1.22F, ModelResultId = 1, Uuid = Guid.NewGuid() },
               new LabelResult { Id = 4, Label = "Gender", Percentage = 0.09F, ModelResultId = 1, Uuid = Guid.NewGuid() },
               new LabelResult { Id = 5, Label = "Age", Percentage = 0.04F, ModelResultId = 1, Uuid = Guid.NewGuid() },
               new LabelResult { Id = 6, Label = "Religion", Percentage = 0.01F, ModelResultId = 1, Uuid = Guid.NewGuid() },
               new LabelResult { Id = 7, Label = "3", Percentage = 60F, ModelResultId = 2, Uuid = Guid.NewGuid() },
               new LabelResult { Id = 8, Label = "4", Percentage = 30F, ModelResultId = 2, Uuid = Guid.NewGuid() },
               new LabelResult { Id = 9, Label = "2", Percentage = 5F, ModelResultId = 2, Uuid = Guid.NewGuid() },
               new LabelResult { Id = 10, Label = "5", Percentage = 3F, ModelResultId = 2, Uuid = Guid.NewGuid() },
               new LabelResult { Id = 11, Label = "1", Percentage = 2F, ModelResultId = 2, Uuid = Guid.NewGuid() }
               );

            modelBuilder.Entity<User>().HasData(
              new User { Id = 1, UserName = "User1", Email = "User1@mail.com", PasswordHash = "$2a$10$pLPKY2GnJD78Ytb/vM4IguNKdQB9kjwBaqsQmmv2KAwpKIREot1ZS", Uuid = Guid.NewGuid() },
              new User { Id = 2, UserName = "admin", Email = "admin@mail.com", PasswordHash = "$2a$10$r4ATG5n9aKI0vBELU/kD0OclZXxUoXunx3Sxy/ykeUyZzLtAklr1i", Uuid = Guid.NewGuid() }
              );
        }
    }
}
