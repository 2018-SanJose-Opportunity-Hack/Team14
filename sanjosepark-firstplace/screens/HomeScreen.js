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
        <Text style={styles.nameText}>San Jose Parks and Recreations</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => this.goToLogin()}>
          <Text style={styles.buttonLabel}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={() => this.goToRegister()}>
          <Text style={styles.buttonLabel}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestButton} onPress={() => this.goToGuest()}>
          <Text style={styles.buttonLabel}>
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A8231',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    paddingBottom: '25%'
  },
  loginButton: {
    backgroundColor: 'orange',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
  },
  buttonLabel: {
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
  },
  registerButton: {
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
  },
  guestButton: {
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
  },
});

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
