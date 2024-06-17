using System.ComponentModel.DataAnnotations;

namespace EmployeeHub.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}