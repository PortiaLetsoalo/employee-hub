using System.Threading.Tasks;
using EmployeeHub.Configuration.Dto;

namespace EmployeeHub.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
