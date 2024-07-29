import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './todoItem';
import AddTodo from './AddTodo';
import { useNavigate } from 'react-router-dom';
import './todolist.css'

const TodoList = () => {
    const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios
            .get('http://localhost:3000/api/todo/todos',
                {
                    headers: { 
                        Authorization: `Bearer ${localStorage.getItem('token')}` },
                });

              
        setTodos(response.data.todos);
        console.log("todos data: "+todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);



  const editTodo = async (id, updatedTodo) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      await axios.put(`http://localhost:3000/api/todo/todos/${id}`, updatedTodo, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };
  
  const deleteTodo = async (id) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      await axios.delete(`http://localhost:3000/api/todo/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };
  

  return (
    <div className='Register-division'>
    <div className='Centered-division'>
      
      {
        todos.length === 0 ? (
          <>
          <p>No Todos</p>
          <button className='register-button'  onClick={() => navigate('/addtodo')}>Add Todo</button>
          </>
        ) :
      
        (
          
          todos.map(todo => (
            <TodoItem className="todo-item" key={todo._id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
          ))
          
        )
      }
        {/* Button to add a todo */}
        

    </div>
    </div>
  );
};

export default TodoList;
