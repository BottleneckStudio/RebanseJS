import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, DrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import { Asset, AppLoading } from 'expo';

import reducer from './reducers';
import tempState from './initialState';

// Log only if development mode.
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware,
		),
	);
	return create(reducer, initialState, enhancer);
}

const store = configureStore(tempState);

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
