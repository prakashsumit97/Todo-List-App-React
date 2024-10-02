import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { Navbar } from "./Navbar";
import AuthContext from "./AuthContext";
import { InputFocus } from "./UserRef";
import WrappedReduxImplementataion from "./Redux";



export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  })

  const [user, setUser] = useState({ name: "Sumit Prakash" });


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currTodos => {
      return [...currTodos, { id: crypto.randomUUID(), title: title, completed: false }]
    })
  }


  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  return <><NewTodoForm onSubmit={addTodo} />
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    <AuthContext.Provider value={{ user, setUser }}>
      <Navbar />
    </AuthContext.Provider>
    <InputFocus />
    <WrappedReduxImplementataion />
  </>
}