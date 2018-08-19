import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
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
      <View style={[styles.container, styles.centered]}>
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

  render() {
    return (
      <View style={[styles.container, styles.centered]}>
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
      <View style={[styles.container, styles.centered]}>
        <Text>
          This is a registerScreen
        </Text>
      </View>
    );
  }
}

const testReports = [
  {
    image: "https://facebook.github.io/react/logo-og.png",
    text: 'This is a disgrace of React logo',
    status: 'open',
  },
  {
    image: 'https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png',
    text: 'This is a cute Pikachu. Please put more in park...please! I want it so much. This is way too cute. Please please please!',
    status: 'pending'
  },
  {
    image: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    text: "JavaScript is the worst language ever. Please remove it!",
    status: 'closed'
  },
  {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/crash_test_dummy.png',
    text: 'this is a dummy report',
    status: 'open',
  },
  {
    image: "https://facebook.github.io/react/logo-og.png",
    text: 'This is a disgrace of React logo',
    status: 'open',
  },
  {
    image: 'https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png',
    text: 'This is a cute Pikachu. Please put more in park...please! I want it so much. This is way too cute. Please please please!',
    status: 'pending'
  },
  {
    image: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    text: "JavaScript is the worst language ever. Please remove it!",
    status: 'closed'
  },
  {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/crash_test_dummy.png',
    text: 'this is a dummy report',
    status: 'open',
  },
  {
    image: "https://facebook.github.io/react/logo-og.png",
    text: 'This is a disgrace of React logo',
    status: 'open',
  },
  {
    image: 'https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png',
    text: 'This is a cute Pikachu. Please put more in park...please! I want it so much. This is way too cute. Please please please!',
    status: 'pending'
  },
  {
    image: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    text: "JavaScript is the worst language ever. Please remove it!",
    status: 'closed'
  },
  {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/crash_test_dummy.png',
    text: 'this is a dummy report',
    status: 'open',
  },
  {
    image: "https://facebook.github.io/react/logo-og.png",
    text: 'This is a disgrace of React logo',
    status: 'open',
  },
  {
    image: 'https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png',
    text: 'This is a cute Pikachu. Please put more in park...please! I want it so much. This is way too cute. Please please please!',
    status: 'pending'
  },
  {
    image: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    text: "JavaScript is the worst language ever. Please remove it!",
    status: 'closed'
  },
  {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/crash_test_dummy.png',
    text: 'this is a dummy report',
    status: 'open',
  },
  {
    image: "https://facebook.github.io/react/logo-og.png",
    text: 'This is a disgrace of React logo',
    status: 'open',
  },
  {
    image: 'https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png',
    text: 'This is a cute Pikachu. Please put more in park...please! I want it so much. This is way too cute. Please please please!',
    status: 'pending'
  },
  {
    image: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    text: "JavaScript is the worst language ever. Please remove it!",
    status: 'closed'
  },
  {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/crash_test_dummy.png',
    text: 'this is a dummy report',
    status: 'open',
  },
];

class ReportsView extends React.Component{

  static navigationOptions = {
    header: null,
  }

  goToUserForm(){
    this.props.navigation.navigate('UserFormScreen');
  }

  loadDummyData(){
    return testReports.map((data) => {
      return (
        <TouchableOpacity style={styles.rowContainer}>
          <Image source={{uri: data.image}}
          style={{width:50, height:50}}
        />
          <Text style={{width: "60%", height: 50}}>
            {data.text}
          </Text>
          <TouchableOpacity style={{width: "30%"}}>
            <Text>
              Status: {data.status}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.bigText}>Current Active Reports</Text>
          {this.loadDummyData()}
          {/* Rendering some dummy data  */}
        </ScrollView>
        <Button title="Add a report" onPress={() => this.goToUserForm()}/>
      </View>
    )
  }

}

class UserFormScreen extends React.Component{

    static navigationOptions = {
      header: null,
    }

    goBackToList(){
      this.props.navigation.navigate('GuestScreen');
    }

    render(){
      return(
        <View style={styles.container}>
          <Text>
            This is the User Form placeholder
          </Text>
          <Button title="Submit Report" onPress={()=> this.goBackToList()}/>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A8231',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    paddingBottom: '25%'
  },
  bigText: {
    fontSize: 30,
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
  rowContainer: {
    flexDirection: 'row'
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
    screen: ReportsView
  },
  UserFormScreen: {
    screen: UserFormScreen
  }
})
