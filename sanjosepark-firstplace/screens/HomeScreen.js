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

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  goToLogin(){
    this.props.navigation.navigate('LoginPage')
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
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonLabel}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestButton}>
          <Text style={styles.buttonLabel}>
            Continue as Guest
          </Text>
        </TouchableOpacity>
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
