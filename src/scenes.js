import React from 'react-native'
import { Scene } from 'react-native-router-flux'

import App from './components/app';
import Greeting from './components/greeting';
import Greeting1 from './components/greeting1';
import Greeting2 from './components/greeting2';

export default (
    <Scene key="root" hideNavBar={false}>
        <Scene key="app" component={App} title="Home" />
        <Scene key="greet" component={Greeting} title="greeting" />
        <Scene key="greet1" component={Greeting1} title="greeting 1" />
        <Scene key="greet2" component={Greeting2} title="greeting 2" />

    </Scene>
)