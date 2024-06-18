using Abp.Application.Services;
using EmployeeHub.Services.CountriesService.Dto;
using EmployeeHub.Services.HttpHelper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeHub.Services.CountriesService
{
    public class CountriesAppService:ApplicationService,IApplicationService
    {
        private readonly IConfiguration _configuration;
        public CountriesAppService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<List<CountryDto>> GetAllCountries()
        {
            var service = new CoutriesHttpHelper(_configuration);
            var countries = await service.GetCountriesAsync();
            return  countries.Select(x => new CountryDto
            {
                Name = x.country,
                Code = x.code
            }).ToList();
        }
    }
}
