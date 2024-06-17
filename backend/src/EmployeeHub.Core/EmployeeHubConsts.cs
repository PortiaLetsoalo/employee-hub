using EmployeeHub.Debugging;

namespace EmployeeHub
{
    public class EmployeeHubConsts
    {
        public const string LocalizationSourceName = "EmployeeHub";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "14431ebe1a9e4c049a947209c79e767e";
    }
}
