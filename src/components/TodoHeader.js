import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/taskSlice';

const TodoHeader = () => {
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();

  const onSubmitTask = () => {
    // Prompt alert if users click "Add" button without typing any text
    if (todo.trim().length === 0) {
      Alert.alert('You need to enter a task');
      setTodo('');
      return;
    }

    dispatch(
      addTask({
        task: todo,
      }),
    );
    setTodo('');
  };

  return (
    <View>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.container}>
        {/* TextInput */}
        <TextInput
          style={styles.textInput}
          placeholder="Add todo"
          onChangeText={setTodo}
          value={todo}
        />
        {/* Button */}
        <TouchableOpacity style={styles.btn} onPress={onSubmitTask}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#1A3C40',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 5,
  },
  btn: {
    backgroundColor: '#789395',
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
  },
});
