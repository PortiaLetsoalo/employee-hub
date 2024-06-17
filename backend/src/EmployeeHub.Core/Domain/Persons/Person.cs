using Abp.Domain.Entities.Auditing;
using EmployeeHub.Domain.Addresses;
using System;

namespace EmployeeHub.Domain.Persons
{
    public class Person:FullAuditedEntity<Guid>
    {
        /// <summary>
        /// 
        /// </summary>
        public virtual string FirstName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string LastName { get; set;}
        /// <summary>
        /// 
        /// </summary>
        public virtual string ContactNumber { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual Address Address { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual DateTime? DateOfBirth { get; set; }
    }
}
