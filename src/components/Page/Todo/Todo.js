import React from 'react';
import './Todo.scss';
import { useState } from 'react';

function Todo() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      title: todo,
      status: false,
    };
    if (!todo) {
      alert('Empty input');
      return;
    }
    setTodoList([...todoList, newTodo]);
    setTodo('');
  };

  const handleDelete = (id) => {
    const newTodoList = [...todoList].filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className='todo-wrapper'>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={todo}
          placeholder='Add todo...'
          onChange={(e) => {
            if (e.target.value.startsWith(' ')) {
              return;
            } else {
              setTodo(e.target.value);
            }
          }}
        />
        <br />
        <button type='submit'>Add</button>
      </form>
      <div className='todo-list'>
        {todoList.map((todo, index) => (
          <div className='todo-child' key={todo.id}>
            {index + 1} - {todo.title}
            <button
              type='button'
              className='delete-btn'
              onClick={() => handleDelete(todo.id)} // truyền vào todo.id
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
