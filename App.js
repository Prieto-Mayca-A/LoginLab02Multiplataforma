/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

export default class LoginView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./img/images.png")} />
        <Text></Text> 
        <View style={styles.inputContainer}>  
        <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://definicion.de/wp-content/uploads/2019/06/perfildeusuario.jpg'}}/>
          <TextInput style={styles.inputs}
              placeholder="Usuariol"
              underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://cdn.icon-icons.com/icons2/2387/PNG/512/public_padlock_unlock_person_people_icon_144648.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Contraseña"

              underlineColorAndroid='transparent'/>
        </View>
     
        <TouchableOpacity style={styles.restoreButtonContainer}>
            <Text>Se olvido su contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DC2323',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#1C1C1C',
  },
  loginText: {
    color: 'white',
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  }
});

 /**
import React,  {Component} from 'react';
import {StyleSheet, 
  TouchableOpacity, 
  Text, 
  View,
  TextInput, 
  Image
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      count: 0,
    };
  }

  changeTextInput = text => {
    this.setState({textValue: text});
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text> Hola amigos</Text>
        </View>

        <Image source={require("./img/logo.png")} />

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.changeTextInput(text)}
          value={this.state.textValue} 
        />

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text> Touch Here </Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]} >
          <Text style={[styles.countText]}>
            {this.state.count}
          </Text>
        </View> 
      </View>
    );    
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 10,
  },

  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },

  countContainer:{
    alignItems: 'center',
    padding: 10,
  },

  countText: {
    color: '#FF00FF'
  },
});
*/