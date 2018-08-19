const styles = StyleSheet.create({

    //General
  container: {
    flex: 1,
    paddingTop: '80px',
    backgroundColor: '#fff',
  },

    //pre Login Page
  loginButton: {
    backgroundColor: '#48731C',
    width: '188px',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    margin: 0 'auto',
  },
  buttonLabel: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  blackFont: {
    color: 'black',
  },
  registerButton: {
    width: '188px',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    margin: '10px' 'auto',
  },
  guestButton: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    bottom: 0;
  },
  preLoginLogo: {
      margin: '100px' 'auto' 0 '100px',
      //width: '188px',
      //height: '212px',
  },
  whiteLogo: {
    left: '20%',
  },
  textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
  },
});

module.exports.styles = styles;
