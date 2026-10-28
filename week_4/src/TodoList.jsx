import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'ללמוד נושאי תכנות בריאקט', isDone: false },
    { id: 2, title: 'לתרגל מעבר על מערכים', isDone: true },
    { id: 3, title: 'להכין פרויקט סיכום', isDone: false },
  ]);

  const addNewTodo = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      isDone: false,
    };
    setTodos([...todos, newTask]);
  };

  const handleToggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  return (
    <div style={{ direction: 'rtl', textAlign: 'right', padding: '20px' }}>
      <h2>רשימת משימות (TodoList)</h2>

      <TodoForm onAddTodo={addNewTodo} />

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isDone={todo.isDone}
            onToggleDone={handleToggleDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;