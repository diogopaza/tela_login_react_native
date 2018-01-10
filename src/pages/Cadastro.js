

import React, { Component } from 'react';
import {
 
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native'

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Cadastro extends Component<{}>{

    static navigationOptions = {
        title: 'Cadastre-se',
      };
    render(){
        return(
            <View style={styles.container}>
                <Logo />
                <Form type="Cadastro" />
                <View style={styles.signupTextCont}>
                    
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
     backgroundColor:'#455a64',
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     
  
    },
    signupTextCont:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'center',
        marginVertical:16,
        flexDirection: 'row',
       


    },
    signupText:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
        paddingHorizontal:5,
    },
    signupButton:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',
    }
  });