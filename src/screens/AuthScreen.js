import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Auth = ({onAuthenticate}) => {
  return (
    <View>
      <Text style={styles.title}>WELCOME</Text>
      <Text style={styles.description}>What's your focus today?</Text>
      <TouchableOpacity onPress={onAuthenticate} style={styles.btn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  btn: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#789395',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  title: {
    fontSize: 50,
    fontWeight: '400',
    marginVertical: 100,
    textAlign: 'center',
    color: '#576F72',
  },
  description: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 50,
  },
});
