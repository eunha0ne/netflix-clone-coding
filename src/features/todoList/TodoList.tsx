import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/features/rootReducer';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
