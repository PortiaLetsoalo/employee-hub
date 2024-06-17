using AutoMapper;
using EmployeeHub.Domain.Skills;
using EmployeeHub.Services.SkillService.Dtos;
using EmployeeHub.Services.Utils;
using System;

namespace EmployeeHub.Services.SkillService.MapProfile
{
    public class SkillMapProfile:Profile
    {
        public SkillMapProfile()
        {
            CreateMap<Skill, SkillDto>()
                .ForMember(x => x.PersonId, m => m.MapFrom(x => x.Person != null ? x.Person.Id : (Guid?)null))
                .ForMember(x => x.SeniorityRatingName, m => m.MapFrom(x => x.SeniorityRating != null ? x.SeniorityRating.GetEnumDescriptionValue() : null));

            CreateMap<SkillDto, Skill>()
                .ForMember(x => x.Id, m => m.Ignore())
                .ForMember(x => x.Person, m => m.Ignore());

        }
    }
}
