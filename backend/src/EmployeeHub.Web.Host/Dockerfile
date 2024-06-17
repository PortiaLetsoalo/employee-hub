FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/EmployeeHub.Web.Host/EmployeeHub.Web.Host.csproj", "src/EmployeeHub.Web.Host/"]
COPY ["src/EmployeeHub.Web.Core/EmployeeHub.Web.Core.csproj", "src/EmployeeHub.Web.Core/"]
COPY ["src/EmployeeHub.Application/EmployeeHub.Application.csproj", "src/EmployeeHub.Application/"]
COPY ["src/EmployeeHub.Core/EmployeeHub.Core.csproj", "src/EmployeeHub.Core/"]
COPY ["src/EmployeeHub.EntityFrameworkCore/EmployeeHub.EntityFrameworkCore.csproj", "src/EmployeeHub.EntityFrameworkCore/"]
WORKDIR "/src/src/EmployeeHub.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/EmployeeHub.Web.Host", "src/EmployeeHub.Web.Host"]
COPY ["src/EmployeeHub.Web.Core", "src/EmployeeHub.Web.Core"]
COPY ["src/EmployeeHub.Application", "src/EmployeeHub.Application"]
COPY ["src/EmployeeHub.Core", "src/EmployeeHub.Core"]
COPY ["src/EmployeeHub.EntityFrameworkCore", "src/EmployeeHub.EntityFrameworkCore"]
WORKDIR "/src/src/EmployeeHub.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "EmployeeHub.Web.Host.dll"]
