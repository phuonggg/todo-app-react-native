import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.tasks);

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({item}) => <TodoItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;
