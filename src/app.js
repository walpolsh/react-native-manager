import React, { Component } from 'react';
import { View, Text } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends component() {
  render() {
    return (
      <Provider store={createStore()}>
        <View>
          <Text>
            HEY!
          </Text>
        </View>
      </Provider>
    );
  }
};

export default App;
