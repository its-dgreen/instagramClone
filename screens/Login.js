import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const backgroundImage = require('../assets/images/circles.jpg');

export const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Instagramish</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <TextInput style={styles.input} placeholder="Password"></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Feed')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    marginTop: 50,
    fontFamily: 'BillionDreams',
    fontSize: 80,
    flex: 1,
    alignSelf: 'center',
  },
  inputContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    height: '20%',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '70%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#4C97F1',
    width: '70%',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    fontFamily: 'Raleway',
    color: '#E8EAED',
  },
});

export default Login;
