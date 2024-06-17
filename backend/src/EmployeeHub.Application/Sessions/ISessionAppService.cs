using System.Threading.Tasks;
using Abp.Application.Services;
using EmployeeHub.Sessions.Dto;

namespace EmployeeHub.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
