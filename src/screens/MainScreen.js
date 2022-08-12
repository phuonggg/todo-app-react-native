import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import store from '../../src/redux/store';
import {Provider} from 'react-redux';
import TodoHeader from '../../src/components/TodoHeader';
import TodoList from '../../src/components/TodoList';

const MainScreen = ({setIsAuthenticated}) => {
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
};

export default MainScreen;

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
});
