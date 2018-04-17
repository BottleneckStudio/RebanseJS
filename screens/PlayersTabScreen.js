import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {createStackNavigator} from 'react-navigation';
import PlayersListScreen from './PlayersListScreen';
import AddPlayerScreen from './AddPlayerScreen';

const PlayerStackNavigator = createStackNavigator({
  PlayersList: PlayersListScreen,
  AddPlayer: AddPlayerScreen
});

export default class PlayersTabScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
      <Ionicons
        name={`ios-person${focused ? '' : '-outline'}`}
        size={25}
        color={tintColor}
      />
    )
  }

  render() {
    return (
      <PlayerStackNavigator />
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
