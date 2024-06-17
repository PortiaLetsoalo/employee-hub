using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using EmployeeHub.Authorization.Roles;
using EmployeeHub.Authorization.Users;
using EmployeeHub.MultiTenancy;
using EmployeeHub.Domain.Persons;
using EmployeeHub.Domain.Skills;
using EmployeeHub.Domain.Addresses;

namespace EmployeeHub.EntityFrameworkCore
{
    public class EmployeeHubDbContext : AbpZeroDbContext<Tenant, Role, User, EmployeeHubDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Person> Persons { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DbSet<Skill> Skills { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DbSet<Address> Addresss { get; set; }
        public EmployeeHubDbContext(DbContextOptions<EmployeeHubDbContext> options)
            : base(options)
        {
        }
    }
}
