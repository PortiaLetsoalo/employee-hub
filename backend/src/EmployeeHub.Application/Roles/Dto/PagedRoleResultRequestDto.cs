using Abp.Application.Services.Dto;

namespace EmployeeHub.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

