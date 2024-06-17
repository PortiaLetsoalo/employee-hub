using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using EmployeeHub.Configuration.Dto;

namespace EmployeeHub.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : EmployeeHubAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
