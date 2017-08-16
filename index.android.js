import {
  AppRegistry
} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('manager', () => App);

//AppRegistry is the JS entry point to running all React Native apps.
//App root components should register themselves with
//AppRegistry.registerComponent, then the native system can load the bundle
//for the app and then actually run the app when it's ready by invoking
//AppRegistry.runApplication.

//App root components should register themselves with AppRegistry.registerComponent
// then the native system can load the bundle for the app and then actually run
// the app when it's ready by invoking AppRegistry.runApplication.
