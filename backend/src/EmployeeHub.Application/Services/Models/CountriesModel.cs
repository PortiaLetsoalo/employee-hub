using System;
using System.Collections.Generic;

namespace EmployeeHub.Services.Models
{
    public class PopulationCount
    {
        /// <summary>
        /// 
        /// </summary>
        public int? year { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Int64? value { get; set; }
    }

    public class CountriesModel
    {
        /// <summary>
        /// 
        /// </summary>
        public string country { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string code { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string iso3 { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public List<PopulationCount> populationCounts { get; set; }
    }

}
