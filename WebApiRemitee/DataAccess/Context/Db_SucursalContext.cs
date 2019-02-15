using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DataAccess.Context
{
    public partial class Db_SucursalContext : DbContext
    {
        public Db_SucursalContext()
        {
        }

        public Db_SucursalContext(DbContextOptions<Db_SucursalContext> options)
            : base(options)
        {
            
        }

        public virtual DbSet<Payer> Payer { get; set; }
        public virtual DbSet<PayerBranch> PayerBranch { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-VUUBRFB\\SQLEXPRESS;Database=Db_Sucursal;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Payer>(entity =>
            {
                entity.Property(e => e.Code)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<PayerBranch>(entity =>
            {
                entity.Property(e => e.Code)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FormattedAddress)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Payer)
                    .WithMany(p => p.PayerBranch)
                    .HasForeignKey(d => d.PayerId)
                    .HasConstraintName("FK__PayerBran__Payer__412EB0B6");
            });
        }
    }
}
