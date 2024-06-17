using System.Threading.Tasks;
using Abp.Application.Services;
using EmployeeHub.Authorization.Accounts.Dto;

namespace EmployeeHub.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
