using System.ComponentModel;

namespace EmployeeHub.Domain.Enums
{
    public enum RefListSeniorityRating:int
    {
        [Description("Beginner")]
        Beginner =1,
        [Description("Intermediate")]
        Intermediate = 2,
        [Description("Advanced")]
        Advanced = 3,
        [Description("Expert")]
        Expert = 4,
    }
}
