import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/circles.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text style={styles.header}>React Native Instagram Clone</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    marginTop: 50,
    fontFamily: 'Raleway-Bold',
    fontSize: 20,
  },
  buttonsContainer: {
    height: '80%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4C97F1',
    width: '100%',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    margin: 15,
  },
  buttonText: {
    fontFamily: 'Raleway',
    color: '#E5E5E5',
  },
});

export default Home;
