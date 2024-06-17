using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace EmployeeHub.EntityFrameworkCore
{
    public static class EmployeeHubDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<EmployeeHubDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<EmployeeHubDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
