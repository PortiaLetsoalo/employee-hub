import EmployeeDetails from './employeeDetails';
import Home from './home';

export enum Screens {
  Home = 'HomeScreen',
  EmployeeDetails = 'EmployeeDetailsScreen',
}

export const AttendanceModuleScreens: any['screens'] = {
  auth: [],
  main: [
    {
      component: Home,
      name: Screens.Home,
    },
    { component: EmployeeDetails, name: Screens.EmployeeDetails },
  ],
};
