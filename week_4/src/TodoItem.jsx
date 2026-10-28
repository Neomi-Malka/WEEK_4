import React from 'react';

function TodoItem({ id, title, isDone, onToggleDone }) {
  const getStatusColor = (done) => {
    return done ? '#d4edda' : '#f8d7da';
  };

  return (
    <li style={{ backgroundColor: getStatusColor(isDone), padding: '8px', margin: '5px 0', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>{title} - {isDone ? 'בוצע ✔' : 'לא בוצע ❌'}</span>
      
      {!isDone && (
        <button onClick={() => onToggleDone(id)} style={{ padding: '4px 8px' }}>
          סמן כבוצע
        </button>
      )}
    </li>
  );
}

export default TodoItem;