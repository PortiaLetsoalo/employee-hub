using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace EmployeeHub.Controllers
{
    public abstract class EmployeeHubControllerBase: AbpController
    {
        protected EmployeeHubControllerBase()
        {
            LocalizationSourceName = EmployeeHubConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
