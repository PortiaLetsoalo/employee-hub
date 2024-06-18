using Abp.Application.Services;
using EmployeeHub.Services.PersonService.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployeeHub.Services.PersonService
{
    public interface IPersonAppService:IApplicationService
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="personCreateDto"></param>
        /// <returns></returns>
        Task<PersonCreateDto> CreateAsyc(PersonCreateDto input);
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        Task<List<PersonCreateDto>> GetAllAsync();
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<PersonCreateDto> GetAsync(string id);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="personCreateDto"></param>
        /// <returns></returns>
        Task<PersonCreateDto> UpdateAsync(PersonCreateDto input);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task DeleteAsync(string id);
    }
}
