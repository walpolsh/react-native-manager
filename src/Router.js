import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='root'>
        <Scene
          key='login'
          component={LoginForm}
          title='Please Login'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;

//this file defines all the possible screens a user can visit in the app
