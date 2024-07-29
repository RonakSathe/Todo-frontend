import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './todo.css'
import axios from 'axios';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAdd = async () => {

    console.log("Getting token");
    const token = localStorage.getItem('token');
    console.log("Got token: "+token);
    if (!token) {
      alert('Please log in first');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/todo/todos',
        { title, description },
        {
          headers: { 
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response: "+response);
      addTodo=response.data;  // Ensure the response data is the new todo item
      setTitle('');
      setDescription('');
      navigate('/todos');  // Redirect to the todo list page
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className='Centered-division'>
      <div className='todo-division'>
      <h2>Add Todo</h2>
      <input
        className='register-input'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        className='register-input'
        rows={3} cols={30}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button className='register-button' onClick={handleAdd}>Add</button>
    </div>
    </div>
  );
};

export default AddTodo;
