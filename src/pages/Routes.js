import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import{
    StackNavigator,
}from 'react-navigation';

import Login from './Login';
import Cadastro from './Cadastro';



/*
export default class Routes extends Component<{}>{

   

    render(){
        return(
        
        <Router>
            <Stack key="root">
              <Scene key="login" component={Login} title="Login"/>
              
             
            </Stack>
         </Router>
      


        )

    }

}
 */ 

const Routes = StackNavigator({
    Home: { screen: Login },
    Cadastro: { screen: Cadastro  },
  });

  export default Routes;
