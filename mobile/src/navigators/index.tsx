import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../screens';
import Home from '../screens/home';
import EmployeeDetails from '../screens/employeeDetails';
import Header from '../components/header';


const Stack = createNativeStackNavigator();

const Navigators = () => {

  return (
    <NavigationContainer>  
      <Stack.Navigator>
        <Stack.Screen name={Screens.Home} component={Home} options={{header: () => <Header title={Screens.Home}/>}}/>
        <Stack.Screen name={Screens.EmployeeDetails} component={EmployeeDetails} options={{header: () => <Header   title={Screens.EmployeeDetails}/>}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
