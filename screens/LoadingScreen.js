import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { setTimeout } from 'core-js/library/web/timers';

export default class LoadingScreen extends React.Component {

  componentDidMount() {
    setTimeout(() => {
        this.props.navigation.navigate('Home');
    }, 2000);
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading Screen</Text>
        <Button title="Routing to Home Screen in 3 seconds or click here" onPress={() => this.props.navigation.navigate('Home')} />
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
