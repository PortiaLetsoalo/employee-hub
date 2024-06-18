using Abp.Application.Services;
using Abp.Domain.Repositories;
using EmployeeHub.Domain.Persons;
using EmployeeHub.Domain.Skills;
using EmployeeHub.Services.SkillService.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeHub.Services.SkillService
{
    public class SkillAppService : ApplicationService, ISkillAppService
    {
        private readonly IRepository<Skill, Guid> _skillRepository;
        private readonly IRepository<Person, string> _personRepository;
        public SkillAppService(IRepository<Skill, Guid> skillRepository, IRepository<Person, string> personRepository)
        {
            _skillRepository = skillRepository;
            _personRepository = personRepository;
        }

        [HttpPost]
        public async Task<SkillDto> CreateAsync(SkillDto input)
        {
            var skill = ObjectMapper.Map<Skill>(input); 
            skill.Person = await _personRepository.GetAllIncluding(x=>x.Address).Where(x=>x.Id == input.PersonId).FirstOrDefaultAsync();
            skill = await _skillRepository.InsertAsync(skill);
            return ObjectMapper.Map<SkillDto>(skill);
        }

        [HttpPost]
        public async Task<List<SkillDto>> CreateSkillSetAsync(List<SkillDto> input)
        {
            var response = new List<Skill>();
            foreach (var skillInput in input)
            {
                var skill = ObjectMapper.Map<Skill>(skillInput);
                skill.Person = await _personRepository.GetAllIncluding(x => x.Address).Where(x => x.Id == skillInput.PersonId).FirstOrDefaultAsync();
                skill = await _skillRepository.InsertAsync(skill);
                response.Add(skill);
            }
            await CurrentUnitOfWork.SaveChangesAsync();

            return ObjectMapper.Map<List<SkillDto>>(response);
        }

        [HttpGet]
        public async Task<List<SkillDto>> GetAllAsync()
        {
            var skills = await _skillRepository.GetAllIncludingAsync(x => x.Person);
            return ObjectMapper.Map<List<SkillDto>>(skills);
        }


        [HttpGet]
        public async Task<List<SkillDto>> GetAllByPersonIdAsync(string personId)
        {
            var skills = await _skillRepository.GetAllIncluding(x => x.Person).Where(x=>x.Person.Id == personId).ToListAsync();
            return ObjectMapper.Map<List<SkillDto>>(skills);
        }

        [HttpPut]
        public async Task<SkillDto> UpdateAsync(SkillDto input)
        {
            var skill = await _skillRepository.GetAllIncluding(x => x.Person).FirstOrDefaultAsync(x => x.Id == input.Id);
            ObjectMapper.Map(input,skill);
            skill = await _skillRepository.InsertOrUpdateAsync(skill);
            return ObjectMapper.Map<SkillDto>(skill);
        }

        [HttpPut]
        public async Task<List<SkillDto>> UpdateSkillSetAsync(List<SkillDto> input)
        {
            var skillset = new List<Skill>();
            foreach(var skillSetInput in input)
            {
                var skill = await _skillRepository.GetAllIncluding(x => x.Person).FirstOrDefaultAsync(x => x.Id == skillSetInput.Id);
                if (skill == null)
                {
                    skill = ObjectMapper.Map<Skill>(skillSetInput);
                    skill.Person = await _personRepository.GetAsync(skillSetInput.PersonId);
                    skill = await _skillRepository.InsertAsync(skill);
                    skillset.Add(skill);
                }
                else
                {
                    ObjectMapper.Map(skillSetInput, skill);
                    skill = await _skillRepository.UpdateAsync(skill);
                    skillset.Add(skill);
                }
           
            }
            await CurrentUnitOfWork.SaveChangesAsync();

            return ObjectMapper.Map<List<SkillDto>>(skillset);
        }

        [HttpGet]
        public async Task<SkillDto> GetAsync(Guid id)
        {
            var skill = await _skillRepository.GetAllIncluding(x => x.Person).FirstOrDefaultAsync(x => x.Id == id);
            return ObjectMapper.Map<SkillDto>(skill);
        }

        [HttpDelete]
        public async Task DeleteAsync(Guid id)
        {
            await _skillRepository.DeleteAsync(id);
        }
    }
}
