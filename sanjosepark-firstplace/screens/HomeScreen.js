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
  TextInput,
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

const testReports = [
  {
    image: "https://facebook.github.io/react/logo-og.png",
    text: 'This is a disgrace of React logo',
    status: 'open',
    location: '2145 Hamilton Ave, San Jose, CA 95125'
  },
  {
    image: 'https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png',
    text: 'This is a cute Pikachu. Please put more in park...please! I want it so much. This is way too cute. Please please please!',
    status: 'pending',
    location: '2145 Hamilton Ave, San Jose, CA 95125'
  },
  {
    image: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    text: "JavaScript is the worst language ever. Please remove it!",
    status: 'closed',
    location: '2145 Hamilton Ave, San Jose, CA 95125'
  },
  {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/crash_test_dummy.png',
    text: 'this is a dummy report',
    status: 'open',
    location: '2145 Hamilton Ave, San Jose, CA 95125'
  },
  {
    image: "https://facebook.github.io/react/logo-og.png",
    text: 'This is a disgrace of React logo',
    status: 'open',
    location: '2145 Hamilton Ave, San Jose, CA 95125'
  },
  {
    image: 'https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png',
    text: 'This is a cute Pikachu. Please put more in park...please! I want it so much. This is way too cute. Please please please!',
    status: 'pending',
    location: '2145 Hamilton Ave, San Jose, CA 95125'
  },
  {
    image: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    text: "JavaScript is the worst language ever. Please remove it!",
    status: 'closed',
    location: '2145 Hamilton Ave, San Jose, CA 95125'
  },
  {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/crash_test_dummy.png',
    text: 'this is a dummy report',
    status: 'open',
    location: '200 E Santa Clara Street, San Jose, CA 95113'
  },
  {
    image: "https://facebook.github.io/react/logo-og.png",
    text: 'This is a disgrace of React logo',
    status: 'open',
    location: '200 E Santa Clara Street, San Jose, CA 95113'
  },
  {
    image: 'https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png',
    text: 'This is a cute Pikachu. Please put more in park...please! I want it so much. This is way too cute. Please please please!',
    status: 'pending',
    location: '200 E Santa Clara Street, San Jose, CA 95113'
  },
  {
    image: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    text: "JavaScript is the worst language ever. Please remove it!",
    status: 'closed',
    location: '200 E Santa Clara Street, San Jose, CA 95113'
  },
  {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/crash_test_dummy.png',
    text: 'this is a dummy report',
    status: 'open',
    location: 'Eastridge Mall'
  },
  {
    image: "https://facebook.github.io/react/logo-og.png",
    text: 'This is a disgrace of React logo',
    status: 'open',
    location: 'Eastridge Mall'
  },
  {
    image: 'https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png',
    text: 'This is a cute Pikachu. Please put more in park...please! I want it so much. This is way too cute. Please please please!',
    status: 'pending',
    location: '1600 Amphitheatre Pkwy, Mountain View, CA 94043'
  },
  {
    image: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    text: "JavaScript is the worst language ever. Please remove it!",
    status: 'closed',
    location: 'Saint James Park',
  },
  {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/crash_test_dummy.png',
    text: 'this is a dummy report',
    status: 'open',
    location: 'Saint James Park',
  },
  {
    image: "https://facebook.github.io/react/logo-og.png",
    text: 'This is a disgrace of React logo',
    status: 'open',
    location: 'Saint James Park',
  },
  {
    image: 'https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png',
    text: 'This is a cute Pikachu. Please put more in park...please! I want it so much. This is way too cute. Please please please!',
    status: 'pending',
    location: 'Alum Rock Park',
  },
  {
    image: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    text: "JavaScript is the worst language ever. Please remove it!",
    status: 'closed',
    location: 'Alum Rock Park',
  },
  {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/crash_test_dummy.png',
    text: 'this is a dummy report',
    status: 'open',
    location: 'Alum Rock Park',
  },
];

function loadDummyData(){
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
class ReportsView extends React.Component{

  static navigationOptions = {
    header: null,
  }

  constructor(props){
    super(props);
    this.state = {
      initialArrayLength: testReports.length,
    }
  }

  goToUserForm(){
    this.props.navigation.navigate('UserFormScreen');
  }


  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.bigText}>Current Active Reports</Text>
          {loadDummyData()}
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

    constructor(props){
      super(props);
      this.state = {
        photoURL: 'https://i.imgur.com/4DpJA5R.jpg',
        location: 'Enter a location',
        description: 'Enter information here',
        status: 'open',
      }
    }

    goBackToList(){
      this.props.navigation.navigate('GuestScreen');
    }

    submitReport(photoURL, location, description, status){
      testReports.unshift({
        image: photoURL,
        text: description,
        status: status,
        location: location,
      })
      this.goBackToList();
    }

    render(){
      return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.uploadPhoto}>
            <Text>
              + Upload Photo
            </Text>
          </TouchableOpacity>
          <TextInput // Location
            style={styles.textInput}
            onChangeText={(location) => this.setState({location: location})}
            value={this.state.username}
          />
          <TextInput // Location
            style={styles.textInput}
            onChangeText={(description) => this.setState({description: description})}
            value={this.state.description}
          />
          <Button title="Submit Report" onPress={()=> this.submitReport(
            'https://i.imgur.com/4DpJA5R.jpg',
            this.state.username,
            this.state.description,
            'open'
          )}/>
        </View>
      )
    }
}

class RegisterScreen extends React.Component{

  static navigationOptions = {
    header: null,
  }

  constructor(props){
    super(props);
    this.state = {
      username: 'Enter a Username',
      password: 'Enter a Password',
      confirmPassword: 'Confirm Password',
      staffCode: 'Enter staff code (optional)',
    }
  }

  render(){
    return(

    <View style={styles.container}>
        <TextInput //User's Email
          style={styles.textInput}
          onChangeText={(username) => this.setState({username: username})}
          value={this.state.username}
        />
        <TextInput // Password field
            style={styles.textInput}
            onChange={(password) => this.setState({password: password})}
            value={this.state.password}
        />
        <TextInput // Confirm password field
          style={styles.textInput}
          onChange={(password) => this.setState({confirmPassword: password})}
          value={this.state.confirmPassword}
        />
        <TextInput //Promo Code
          style={styles.textInput}
          onChange={(staffCode) => this.setState({staffCode: staffCode})}
          value={this.state.staffCode}
        />
        {/* <TouchableOpacity style={styles.registerButton} onPress={() => this.goToRegister()}>
          <Text style={[styles.buttonLabel, styles.blackFont]}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestButton} onPress={() => this.goToGuest()}>
          <Text style={[styles.buttonLabel, styles.blackFont]}>
            Continue as Guest
          </Text>
        </TouchableOpacity> */}
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
  // container: {
  //   flex: 1,
  //   paddingTop: '80px',
  //   backgroundColor: '#fff',
  // },
  //
  //   //pre Login Page
  // loginButton: {
  //   backgroundColor: '#48731C',
  //   width: '188px',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '80px',
  //   margin: 0 'auto',
  // },
  // buttonLabel: {
  //   fontSize: 32,
  //   color: 'white',
  //   textAlign: 'center',
  //   textTransform: 'uppercase',
  // },
  // blackFont: {
  //   color: 'black',
  // },
  // registerButton: {
  //   width: '188px',
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '80px',
  //   margin: '10px' 'auto',
  // },
  // guestButton: {
  //   width: '100%',
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '80px',
  //   bottom: 0;
  // },
  // preLoginLogo: {
  //     margin: '100px' 'auto' 0 '100px',
  //     //width: '188px',
  //     //height: '212px',
  // },
  // whiteLogo: {
  //   left: '20%',
  // },
  // textInput: {
  //     height: 40,
  //     borderColor: 'gray',
  //     borderWidth: 1,
  // },
  uploadPhoto: {
    width: '70%',
    height: '30%',
    backgroundColor: 'grey',
  }
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
