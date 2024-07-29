import React, { useState } from 'react';
import './todoItem.css';

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo._id, { ...todo, title: editedTitle, description: editedDescription });
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    deleteTodo(todo._id);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      )}
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
