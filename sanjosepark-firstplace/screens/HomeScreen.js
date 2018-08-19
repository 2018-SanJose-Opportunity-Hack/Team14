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

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

  render() {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text>
          This is a loginScreen
        </Text>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

  render() {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text>
          This is a registerScreen
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

class ReportsView extends React.Component{
  static navigationOptions = {
    header: null,
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.bigText}>Current Active Reports</Text>
      </View>
    )
  }

}

// class GuestScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
//   };
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           This is a guestScreen
//         </Text>
//       </View>
//     );
//   }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A8231',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  bigText: {
    fontSize: 30,
  },
  loginButton: {
    backgroundColor: 'orange',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  GuestScreen: {
    screen: ReportsView
  },
});
