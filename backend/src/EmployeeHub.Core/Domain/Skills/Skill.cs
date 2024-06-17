using Abp.Domain.Entities.Auditing;
using EmployeeHub.Domain.Enums;
using EmployeeHub.Domain.Persons;
using System;

namespace EmployeeHub.Domain.Skills
{
    public class Skill:FullAuditedEntity<Guid>
    {
        /// <summary>
        /// 
        /// </summary>
        public virtual string Name {  get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual int? YearsOfExperience { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual RefListSeniorityRating? SeniorityRating {  get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual Person Person { get; set; }
    } 
}
