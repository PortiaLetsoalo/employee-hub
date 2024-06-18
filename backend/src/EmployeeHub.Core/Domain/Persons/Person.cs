using Abp.Domain.Entities.Auditing;
using EmployeeHub.Domain.Addresses;
using System;
using System.Linq;

namespace EmployeeHub.Domain.Persons
{
    public class Person:FullAuditedEntity<string>
    {
        public Person()
        {
            Id = GenerateId();
        } 
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
        public virtual string MobileNumber { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string EmailAddress { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual Address Address { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual DateTime? DateOfBirth { get; set; }

        private static string GenerateId()
        {
            var random = new Random();
            var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var idLetters = new string(Enumerable.Repeat(letters, 2)
                .Select(s => s[random.Next(s.Length)]).ToArray());
            var idNumbers = random.Next(1000, 10000).ToString();

            return idLetters + idNumbers;
        }
    }
}
