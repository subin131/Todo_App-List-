import React from "react";
import "./App.css";
import {} from "module";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <h1>My Todo App</h1>
      {/* <TodoForm /> */}
      <TodoList />
    </div>
  );
}

export default App;
