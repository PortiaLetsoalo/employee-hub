using Abp.AutoMapper;
using AutoMapper;
using EmployeeHub.Domain.Addresses;
using EmployeeHub.Domain.Persons;
using EmployeeHub.Services.PersonService.Dtos;
using System;

namespace EmployeeHub.Services.PersonService.MapProfile
{
    public class PersonMapProfile:Profile
    {
        public PersonMapProfile()
        {
            CreateMap<Person, PersonCreateDto>()
                 .ForMember(x => x.City, m => m.MapFrom(x => x.Address != null ? x.Address.City : null))
                 .ForMember(x => x.PostalCode, m => m.MapFrom(x => x.Address != null ? x.Address.PostalCode : null))
                 .ForMember(x => x.StreetName, m => m.MapFrom(x => x.Address != null ? x.Address.StreetName : null))
                 .ForMember(x => x.ContactNumber, m => m.MapFrom(x => x.MobileNumber))
                 .ForMember(x => x.Country, m => m.MapFrom(x => x.Address != null ? x.Address.Country : null));

            CreateMap<PersonCreateDto, Person>()
                .ForMember(x => x.Id, m => m.Ignore())
                .ForMember(x => x.MobileNumber, m => m.MapFrom(x=>x.ContactNumber))
                .ForMember(x => x.Address, m => m.Ignore());

            CreateMap<Person, PersonDto>()
                .ForMember(x => x.AddressId, m => m.MapFrom(x => x.Address != null ? x.Address.Id : (Guid?)null));

            CreateMap<PersonCreateDto,Address>()
                .ForMember(x => x.PostalCode, y => y.MapFrom(x => x.PostalCode))
                .ForMember(x => x.Country, y => y.MapFrom(x => x.Country))
                .ForMember(x => x.City, y => y.MapFrom(x => x.City))
                .ForMember(x => x.StreetName, y => y.MapFrom(x => x.StreetName))
                .ForMember(x => x.Id, m => m.Ignore());
         
        }
    }
}
