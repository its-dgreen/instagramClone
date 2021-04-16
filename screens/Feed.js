import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

export const Feed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Instagramish</Text>
      <Text>Feed will go here after I figure out auth</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({header: {
  fontFamily: 'BillionDreams',
  fontSize: 30,
  alignSelf: 'center',
},});

export default Feed;
