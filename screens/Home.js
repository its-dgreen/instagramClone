import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/circles.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View>
          <Text>React Native Instagram Clone</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>Solarized</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
