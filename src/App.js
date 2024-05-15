import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from './features/todoSlice';
import TodoItem from './components/TodoItem';
import { useState } from 'react';

import './App.css';

function App() {
  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [input, setInput]= useState([])
  
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  }

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
};

  return (
    <>
    <h1 className='text-red-700'>TODO LIST USING REDUX-TOOLKIT</h1>

    <form onSubmit={submitHandle}>
    <input type="text" onInput={(e) => setInput(e.target.value)} />
    <button type="submit">+</button>
    </form>

    <div>
    {count > 0 &&
      todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          id={todo.id}
          onCheck={handleTodoDone}
        />
      ))}
    {count === 0 && <p>No todos</p>}
</div>
      
   
    </>
  );
}

export default App;
