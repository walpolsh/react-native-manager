import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAwVLO2Xu_IWN0trzjboOpWDIhHg5ZwP0A',
      authDomain: 'manager-f1a23.firebaseapp.com',
      databaseURL: 'https://manager-f1a23.firebaseio.com',
      projectId: 'manager-f1a23',
      storageBucket: 'manager-f1a23.appspot.com',
      messagingSenderId: '486766446502',
    };
    firebase.initializeApp(config);
  };

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            HEY! HELLO! SUP!
          </Text>
        </View>
      </Provider>
    );
  }
};

export default App;

//Arguments
//reducer (Function): A reducing function that returns the next state,
// given the current state and an action to handle.
