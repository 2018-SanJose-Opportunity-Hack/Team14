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
    this.props.navigation.navigate('FormIssue2')
  }

  goToGuest(){
    this.props.navigation.navigate('GuestScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.uploadPhoto()}>
            <Image style={}
                source={{uri: 'imagePlaceholder'}} //No image yet, covered by uploadedPhoto
            />
            <Image style={}
                source={{uri: {uploadedPhoto}} //Gets from the user
            />
        <TextInput //The Title for the issue
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        
        <TouchableOpacity style={styles.formButton} onPress={() => this.goToDescriptions()}>
          <Text style={[styles.buttonLabel]}>
              {`Describe (1/3)`}
          </Text>
        </TouchableOpacity>
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
