using Abp.Domain.Entities.Auditing;
using System;

namespace EmployeeHub.Domain.Addresses
{
    public class Address:FullAuditedEntity<Guid>
    {
        /// <summary>
        /// 
        /// </summary>
        public virtual string StreetName {  get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string City { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string PostalCode { get; set;}
        /// <summary>
        /// 
        /// </summary>
        public virtual string Country { get; set;}
    }
}
