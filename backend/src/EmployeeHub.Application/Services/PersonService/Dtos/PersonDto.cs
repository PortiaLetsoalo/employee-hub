using Abp.Application.Services.Dto;
using System;

namespace EmployeeHub.Services.PersonService.Dtos
{
    public class PersonDto:EntityDto<Guid>
    {
        /// <summary>
        /// 
        /// </summary>
        public string FirstName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string LastName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ContactNumber { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string EmailAddress { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Guid? AddressId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DateTime? DateOfBirth { get; set; }
    }
}
