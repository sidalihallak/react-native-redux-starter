import React,{ Component } from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


export default class Blog extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <App />
            </Provider>
        );
    }
}