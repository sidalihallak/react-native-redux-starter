import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Greeting2 extends React.Component  {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hey there!</Text>
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

export default connect(({routes}) => ({routes}))(Greeting2);
