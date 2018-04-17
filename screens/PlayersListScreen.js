import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class PlayersListScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Players',
            headerTintColor: '#a41034',
            headerRight: <Ionicons
                name={`ios-person-add`}
                size={30}
                color={'#a41034'}
                style={{paddingRight: 15}}
                onPress={() => {navigation.navigate('AddPlayer')}}
            />
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Players List Screen</Text>
                <Button
                    title="Back to Home"
                    onPress={() => {
                    this
                        .props
                        .navigation
                        .navigate('Home')
                }}/>
            </View>
        );
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
