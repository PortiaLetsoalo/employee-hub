using Abp.Application.Services;
using EmployeeHub.MultiTenancy.Dto;

namespace EmployeeHub.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

