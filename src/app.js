import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; //requires applyMiddleware from redux
import reducers from './reducers';
import RouterComponent from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    //arg 2 = any initial state that we want to pass to redux
    //applyMiddleware(ReduxThunk) = store enhancer = adds functionality to the store
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
};

export default App;

//Arguments
//reducer (Function): A reducing function that returns the next state,
// given the current state and an action to handle.
