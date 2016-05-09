import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <View {...this.props}  style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Button onPress={Actions.greet}>Go to Register page</Button>
                <Button onPress={Actions.greet1}>Go to Register page</Button>
                <Button onPress={Actions.greet2}>Go to Register page</Button>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default connect(({routes}) => ({routes}))(App);
