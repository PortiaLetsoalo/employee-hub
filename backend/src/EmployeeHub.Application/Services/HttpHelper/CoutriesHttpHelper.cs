using EmployeeHub.Services.Models;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeHub.Services.HttpHelper
{
    public class CoutriesHttpHelper
    {
        private readonly IConfiguration  _configuration;
        public CoutriesHttpHelper(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public object JsoncConvert { get; private set; }

        public async Task<List<CountriesModel>> GetCountriesAsync()
        {
            var options = new RestClientOptions(_configuration.GetSection("App")["CountriesUrl"])
            {
            };
            var client = new RestClient(options);
            var request = new RestRequest("/api/v0.1/countries/population", Method.Get);
            RestResponse response = await client.ExecuteAsync(request);
       
            var countires = JsonConvert.DeserializeObject<List<CountriesModel>>(JsonConvert.SerializeObject(JObject.Parse(response.Content)["data"]));
            return countires;
        }
    }
}
