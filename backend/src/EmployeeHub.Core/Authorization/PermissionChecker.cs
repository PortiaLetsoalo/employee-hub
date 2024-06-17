using Abp.Authorization;
using EmployeeHub.Authorization.Roles;
using EmployeeHub.Authorization.Users;

namespace EmployeeHub.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
