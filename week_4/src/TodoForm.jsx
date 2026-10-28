import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;

    onAddTodo(title);

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
      <input
        type="text"
        placeholder="הכנס שם משימה חדשה..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '6px', marginLeft: '8px', width: '250px' }}
      />
      <button type="submit" style={{ padding: '6px 12px' }}>אישור</button>
    </form>
  );
}

export default TodoForm;