import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
      }}
    >
      <h2>React Redux To-Do List</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
