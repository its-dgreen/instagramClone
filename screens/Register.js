import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

export const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <TextInput style={styles.input} placeholder="Password"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
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
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '25%',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '70%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#4C97F1',
    width: '70%',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Raleway',
    color: '#E8EAED',
  },
});

export default Register;
