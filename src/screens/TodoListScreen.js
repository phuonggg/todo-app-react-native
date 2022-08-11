import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {StatusBar} from 'expo-status-bar';
// import SafeAreaView from safeArea context
// import { SafeAreaProvider } from "react-native-safe-area-context";
//import
//import TodoHeader
import TodoHeader from '../../src/components/TodoHeader';
//import TodoList

import TodoList from '../../src/components/TodoList';
//import store from "./src
import store from '../../src/redux/store';
//import Provider
import {Provider} from 'react-redux';

export default function TodoListScreen({setIsAuthenticated}) {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <TodoHeader />
        <TodoList />
        <TouchableOpacity
          onPress={() => setIsAuthenticated(false)}
          style={styles.btn}>
          <Text style={styles.text}>Log out</Text>
        </TouchableOpacity>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: 15,
    paddingBottom: 20,
  },
});
