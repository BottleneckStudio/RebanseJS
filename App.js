import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator, DrawerNavigator} from 'react-navigation'
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import {Asset, AppLoading} from 'expo';

const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Loading: LoadingScreen
}, {initialRouteName: 'Home'});

export default class App extends React.Component {

  render() {
    return (<AppNavigator/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
