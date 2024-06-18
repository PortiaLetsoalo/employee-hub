using Abp;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.UI;
using EmployeeHub.Domain.Addresses;
using EmployeeHub.Domain.Persons;
using EmployeeHub.Services.PersonService.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeHub.Services.PersonService
{
    public class PersonAppService : ApplicationService, IPersonAppService
    {
        private readonly IRepository<Person,string> _personRepository;
        private readonly IRepository<Address,Guid> _adddressRepository;
        public PersonAppService(IRepository<Person, string> personRepository, IRepository<Address, Guid> adddressRepository)
        {
            _adddressRepository = adddressRepository;
            _personRepository = personRepository;
        }
        /// <summary>
        /// Creating both person and address at the same time.
        /// because personCreateDto input includes all Address propreties.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<PersonCreateDto> CreateAsyc(PersonCreateDto input)
        {
            var person = ObjectMapper.Map<Person>(input);
            person.Address = await CreateAddress(input);
            person = await _personRepository.InsertAsync(person);
            return ObjectMapper.Map<PersonCreateDto>(person);
        }

        [HttpGet]
        public async Task<List<PersonCreateDto>> GetAllAsync()
        {
            var persons = await _personRepository.GetAllIncludingAsync(x => x.Address);
            return ObjectMapper.Map<List<PersonCreateDto>>(persons);
        }

        [HttpGet]
        public async Task<PersonCreateDto> GetAsync(string id)
        {
            var person = await _personRepository.GetAllIncluding(x => x.Address).Where(x=>x.Id == id).FirstOrDefaultAsync();
            return ObjectMapper.Map<PersonCreateDto>(person);
        }
        /// <summary>
        /// Updating both person and address at the same time,because personCreateDto input includes all Address propreties.
        ///We first get the person we want to update along with their address information(addressId since its 
        ///required in the UpdateAddress function
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        /// <exception cref="UserFriendlyException"></exception>

        [HttpPut]
        public async Task<PersonCreateDto> UpdateAsync(PersonCreateDto input)
        {
            var person = await _personRepository.GetAllIncluding(x=>x.Address).Where(x=>x.Id == input.Id).FirstOrDefaultAsync();
            if(person == null)
                throw new UserFriendlyException($"Person with id {input.Id} does not exist");

            ObjectMapper.Map(input,person);
            person.Address = await UpdateAddress(input,person.Address.Id);
            person = await _personRepository.UpdateAsync(person);
            return ObjectMapper.Map<PersonCreateDto>(person);
        }

        [HttpDelete]
        public async Task DeleteAsync(string id)
        {
            await _personRepository.DeleteAsync(id);
        }

        /// <summary>
        /// Checking if the passed Address input exist in the db first.
        /// if address does not exist in the db we insert the address in the db.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        private async Task<Address> CreateAddress(PersonCreateDto input)
        {
            var address = await _adddressRepository.FirstOrDefaultAsync(x => x.City == input.City &&
                                x.Country == input.Country && x.PostalCode == input.PostalCode && x.StreetName == x.StreetName);

            if(address == null)
            {
                address = ObjectMapper.Map<Address>(input);
                address = await _adddressRepository.InsertAsync(address);
            };
            return address;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="input"></param>
        /// <param name="addressId"></param>
        /// <returns></returns>
        private async Task<Address> UpdateAddress(PersonCreateDto input,Guid addressId)
        {
            var address = await _adddressRepository.GetAsync((Guid)addressId);
            ObjectMapper.Map(input, address);
            address = await _adddressRepository.UpdateAsync(address);
            return address;
        }
    }
}
