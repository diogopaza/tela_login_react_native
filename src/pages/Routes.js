import React, {Component} from 'react';
//import {Router, Stack, Scene} from 'react-native-router-flux';
import{
    StackNavigator,
}from 'react-navigation';

import Login from './Login';
import Cadastro from './Cadastro';
import Form from '../components/Form';



//export default class Routes extends Component<{}>{

   
/*
    render(){
        return(
        /*
        <Router>
            <Stack key="root">
              <Scene key="login" component={Login} title="Login"/>
              <Scene key="register" component={Cadastro} title="Register"/>
             
            </Stack>
         </Router>
      


        )

    }

}
  */

const Routes = StackNavigator({
    Home: { screen: Login },
   // Profile: { screen: ProfileScreen },
  });

  export default Routes;