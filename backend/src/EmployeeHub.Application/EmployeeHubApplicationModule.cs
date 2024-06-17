using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using EmployeeHub.Authorization;

namespace EmployeeHub
{
    [DependsOn(
        typeof(EmployeeHubCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class EmployeeHubApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<EmployeeHubAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(EmployeeHubApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
