import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function Auth({onAuthenticate}) {
  return (
    <View>
      <Text style={styles.title}>WELCOME</Text>
      <Text style={styles.description}>What's your focus today?</Text>
      <TouchableOpacity onPress={onAuthenticate} style={styles.btn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#0893FC',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 400,
    height: 461,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  title: {
    fontSize: 50,
    fontWeight: '400',
    marginVertical: 30,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 50,
  },
});
