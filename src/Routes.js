import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Names from './pages/Registration/Names';
import Email from './pages/Registration/Email';
import Password from './pages/Registration/Password';
import EndOfSignUp from './pages/Registration/EndOfSignUp';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="names" component={Names} title="Enter Names" hideNavBar={false}/>
						<Scene key="email" component={Email} title="Enter Email Address" hideNavBar={false}/>
						<Scene key="password" component={Password} title="Enter Password" hideNavBar={false}/>
						<Scene key="endOfSignup" component={EndOfSignUp} title="DOB, Country, Phone, Sex" hideNavBar={false}/>
			    </Stack>
			 </Router>
			)
	}
}