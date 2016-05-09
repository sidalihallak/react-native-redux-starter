
import React, { Component } from 'react'
import { Router } from 'react-native-router-flux'
import { createStore, applyMiddleware, compose } from 'redux'
import { connect, Provider } from 'react-redux'
import scenes from './scenes'
import promis from 'redux-promise'
import reducers from './reducers'

const RouterWithRedux = connect()(Router);
const middlewares = [promis];
const store = compose(
    applyMiddleware(...middlewares)
)(createStore)(reducers);

class Blog extends Component {

    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>{scenes}</RouterWithRedux>
            </Provider>
        )
    }
}

export default Blog