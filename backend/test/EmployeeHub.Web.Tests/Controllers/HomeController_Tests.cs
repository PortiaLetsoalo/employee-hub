using System.Threading.Tasks;
using EmployeeHub.Models.TokenAuth;
using EmployeeHub.Web.Controllers;
using Shouldly;
using Xunit;

namespace EmployeeHub.Web.Tests.Controllers
{
    public class HomeController_Tests: EmployeeHubWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}