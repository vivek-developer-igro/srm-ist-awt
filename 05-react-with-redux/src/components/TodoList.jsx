import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/actions";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((task, idx) => (
        <li key={idx}>
          {task}
          <button
            onClick={() => dispatch(removeTodo(idx))}
            style={{ marginLeft: "10px" }}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
