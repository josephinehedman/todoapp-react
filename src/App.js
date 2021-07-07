import './App.css';
import { useState } from 'react';
import React from 'react';
import Header from './components/header/Header'
import TodoList from './components/todoList/TodoList';
import AddTodo from './components/addTodo/AddTodo';

const App = () => {

  const [todoList, setTodoList] = useState([]);

  const addTodo = (title, desc) => {
    const newTodo = {
      id: Date.now(),
      title,
      desc,
      done: false
    }
    setTodoList([...todoList, newTodo]);
  }

  const toggleDone = (id) => {
    setTodoList(todoList.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  }

  return (
    <>
    <Header />
      <main className="main-content">
        <section className="todo-container">
          <AddTodo addTodo={addTodo}/>
          <TodoList list={todoList} onToggle={toggleDone} onDelete={deleteTodo}/>
          </section>
      </main>
    </>

  );
}

export default App;
