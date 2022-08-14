import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {deleteTask, updateTask} from '../redux/taskSlice';
import {useDispatch} from 'react-redux';

const TodoItem = ({item}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [todo, setTodo] = useState('');

  const onEdit = item => {
    dispatch(
      updateTask({
        id: item.id,
        name: todo,
      }),
    );
  };

  const onDelete = id => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };

  const editTodoModal = (
    <Modal animationType={'slide'} transparent={true} visible={showModal}>
      <View style={styles.modal}>
        {/* TextInput */}
        <TextInput
          style={styles.textInput}
          placeholder="Edit todo"
          onChangeText={setTodo}
          value={todo}
        />
        {/* Button */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onEdit(item);
            setShowModal(!showModal);
          }}>
          <Text> Save Edit</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  return (
    <View>
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => {
              setShowModal(!showModal);
            }}>
            <Text> Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(item.id)}>
            <Text> Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Render modal to edit todo when users click "Edit" button */}
      {editTodoModal}
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e9e9e9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#B4CFB0',
    alignItems: 'center',
    padding: 3,
  },
  deleteButton: {
    backgroundColor: '#789395',
    alignItems: 'center',
    padding: 3,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B4CFB0',
    padding: 30,
    marginHorizontal: 20,
    marginVertical: 200,
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
