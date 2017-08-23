import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene
          key='login'
          component={LoginForm}
          title='Please Login'
        />
        <Scene
          key='employeeList'
          component={EmployeeList}
          title='Employees'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;

//this file defines all the possible screens a user can visit in the app
