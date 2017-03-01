/* @flow */

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
// import { styles } from '../components/NavigationBar'
// import LaunchContainer from '../containers/LaunchContainer'
// import CounterContainer from '../containers/CounterContainer'
// import LoginContainer from '../containers/LoginContainer'
// import RegisterContainer from '../containers/RegisterContainer'
import HomeContainer from '../containers/HomeContainer'
// import DocumentContainer from '@containers/DocumentContainer'
// import SettingContainer from '@containers/SettingContainer'
// import ResetPasswordContainer from '@containers/ResetPasswordContainer'
// import form from '@theme/form'

//Override default styles of form
form();

//var LoginContainer = require('../containers/LoginContainer');
//debugger;<Scene key="welcome" component={LaunchContainer} title="Welcome" />
const scenes = Actions.create(
  	<Scene key="app" navigationBarStyle={styles.container} titleStyle={styles.title}>
	    <Scene key="home" component={HomeContainer} title="Home" type={"reset"}/>
	    {/*<Scene key="register" component={RegisterContainer} title="Register" type={"replace"}/>
	    <Scene key="login" component={LoginContainer} type={"replace"} />*/}
	    
	    {/*<Scene key="document" component={DocumentContainer} title="" />
	    <Scene key="counter" component={CounterContainer} title="Counter" />
	    <Scene key="setting" component={SettingContainer} title="Profile" />
	    <Scene key="changePassword" component={ResetPasswordContainer} title="Change Passsword" />*/}
  	</Scene>
)

export default scenes
