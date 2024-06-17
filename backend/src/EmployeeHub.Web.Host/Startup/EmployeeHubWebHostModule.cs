using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using EmployeeHub.Configuration;

namespace EmployeeHub.Web.Host.Startup
{
    [DependsOn(
       typeof(EmployeeHubWebCoreModule))]
    public class EmployeeHubWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public EmployeeHubWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(EmployeeHubWebHostModule).GetAssembly());
        }
    }
}
