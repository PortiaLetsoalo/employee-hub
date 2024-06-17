using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using EmployeeHub.EntityFrameworkCore;
using EmployeeHub.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace EmployeeHub.Web.Tests
{
    [DependsOn(
        typeof(EmployeeHubWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class EmployeeHubWebTestModule : AbpModule
    {
        public EmployeeHubWebTestModule(EmployeeHubEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(EmployeeHubWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(EmployeeHubWebMvcModule).Assembly);
        }
    }
}