import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { MonoText } from '../components/StyledText';
import { styles } from 'styles'

class FirstScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  goToLogin(){
    this.props.navigation.navigate('LoginScreen')
  }

  goToRegister(){
    this.props.navigation.navigate('RegisterScreen')
  }

  goToGuest(){
    this.props.navigation.navigate('GuestScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.preLoginLogo}
          source={{uri: '../assets/images/tree-42476.png'}}
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => this.goToLogin()}>
          <Text style={styles.buttonLabel}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={() => this.goToRegister()}>
          <Text style={[styles.buttonLabel, styles.blackFont]}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestButton} onPress={() => this.goToGuest()}>
          <Text style={[styles.buttonLabel, styles.blackFont]}>
            Continue as Guest
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  goToLogin(){
    this.props.navigation.navigate('LoginPage')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is a loginScreen
        </Text>
      </View>
    );
  }
}

class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is a registerScreen
        </Text>
      </View>
    );
  }
}

class GuestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is a guestScreen
        </Text>
      </View>
    );
  }
}

export default createStackNavigator({
  FirstScreen: {
    screen: FirstScreen
  },
  LoginScreen: {
    screen: LoginScreen
  },
  RegisterScreen: {
    screen: RegisterScreen
  },
  GuestScreen: {
    screen: GuestScreen
  },
})
