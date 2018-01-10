

import React, { Component } from 'react';
import {
 
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

import Logo from '../components/Logo';
import Form from '../components/Form';
import Cadastro from './Cadastro';

export default class Login extends Component<{}>{
    static navigationOptions = {
        title: 'DiogoPaza Systems',
      };
  

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Logo />
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Você não tem cadastro?</Text>
                    <TouchableOpacity onPress={() => navigate('Cadastro')}><Text style={styles.signupButton}>Cadastre-se</Text></TouchableOpacity>
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