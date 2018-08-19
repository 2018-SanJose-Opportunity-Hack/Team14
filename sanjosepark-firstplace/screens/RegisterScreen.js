import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Input,
} from 'react-native';
import { WebBrowser } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { MonoText } from '../components/StyledText';
import { styles } from 'styles'


class FirstScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  goToIssueList(){ //Back to the park page
    this.props.navigation.navigate('')
  }

  goToDescriptions(){
    this.props.navigation.navigate('ParksListScreen')
  }

  goToGuest(){
    this.props.navigation.navigate('GuestScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput //User's Email
        style={styles.textInput}
        onChangeText={(email) => this.setState({email})}
        value={this.state.text}
        />
        <TextInput //Encripted Password
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <TextInput //Encripted Password
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <TextInput //Promo Code
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
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

export default createStackNavigator({
})
