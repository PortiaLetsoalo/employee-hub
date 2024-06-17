using Abp.Application.Services;
using EmployeeHub.Services.SkillService.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeHub.Services.SkillService
{
    public interface ISkillAppService:IApplicationService
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<SkillDto> CreateAsync(SkillDto input);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<SkillDto> GetAsync(Guid id);
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        Task<List<SkillDto>> GetAllAsync();
        /// <summary>
        /// 
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<SkillDto> UpdateAsync(SkillDto input);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="personId"></param>
        /// <returns></returns>
        Task<List<SkillDto>> GetAllByPersonIdAsync(Guid personId);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task DeleteAsync(Guid id);
    }
}
