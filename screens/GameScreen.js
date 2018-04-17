import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class GameScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
      <Ionicons
        name={`ios-basketball${focused ? '' : '-outline'}`}
        size={25}
        color={tintColor}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Game Screen</Text>
        <Button title="Back to Loading" onPress={() => {this.props.navigation.navigate('Loading')}} />
      </View>
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
