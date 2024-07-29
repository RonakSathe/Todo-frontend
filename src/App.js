import { Route,Routes } from 'react-router-dom';
import './App.css';
import Register from './components/register';
import Login from './components/Login';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
      <div className='app-container'>
        <Routes>
        <Route path="/" element={<Register/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/todos" element={<TodoList/>} />
          <Route path="/addtodo" element={<AddTodo/>} />
        </Routes>
      
      </div>
  );
}

export default App;
