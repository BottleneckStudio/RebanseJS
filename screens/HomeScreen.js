import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import PlayersTabScreen from './PlayersTabScreen';
import GameScreen from './GameScreen';
import SettingsScreen from './SettingsScreen';
import LoadingScreen from './LoadingScreen';

const MainTabNavigator = createBottomTabNavigator({
    Game: GameScreen,
    Players: PlayersTabScreen,
    Settings: SettingsScreen
},{
  tabBarOptions: {
    activeTintColor: '#a41034'
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Loading: LoadingScreen,
  Home: MainTabNavigator,
})

export default class HomeScreen extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
