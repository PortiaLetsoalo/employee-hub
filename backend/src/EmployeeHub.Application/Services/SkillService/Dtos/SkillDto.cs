using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using EmployeeHub.Domain.Enums;
using EmployeeHub.Domain.Persons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeHub.Services.SkillService.Dtos
{
    public class SkillDto:EntityDto<Guid>
    {
        /// <summary>
        /// 
        /// </summary>
        public  string Name { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public  int? YearsOfExperience { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public  RefListSeniorityRating? SeniorityRating { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public  string SeniorityRatingName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public  Guid? PersonId { get; set; }
    }
}
