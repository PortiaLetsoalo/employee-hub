using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace EmployeeHub.Localization
{
    public static class EmployeeHubLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(EmployeeHubConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(EmployeeHubLocalizationConfigurer).GetAssembly(),
                        "EmployeeHub.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
