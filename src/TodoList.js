import React, { useState } from 'react';
import Todo from './Todo'

export default function TodoList({ todos }) {
  return (
   todos.map(todo => {
     return <Todo key={todo.id} toggleTodo={toggleTodo}todo={todo} />
   })
  )
}
