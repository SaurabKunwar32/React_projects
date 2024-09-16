import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Todo.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo() {
  let [todo, setTodo] = useState([
    {
      task: "Sample task !! ",
      id: uuidv4(),
      isDone: false,
    },
  ]);

  let [newtodo, setNewTodo] = useState("");

  let buttonClick = () => {
    if (newtodo.trim() === "") return;

    setTodo((prevTd) => {
      // Remove the sample task if it's the only task in the list
      if (prevTd.length === 1 && prevTd[0].task === "Sample task !! ") {
        return [{ task: newtodo, id: uuidv4(), isDone: false }];
      } else {
        return [
          ...prevTd,
          { task: newtodo, id: uuidv4(), isDone: false },
        ];
      }
    });

    setNewTodo("");
  };

  // to update todo
  let updatetodo = (event) => {
    setNewTodo(event.target.value);
  };

  // To delete any todos
  let deleteUpdate = (id) => {
    // we use filter to filter out any element that we dont need.
    setTodo(todo.filter((tods) => tods.id != id));
  };

  // for isDOne
  let MarksasDone = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((stodos) => {
        if (stodos.id === id) {
          return {
            ...stodos,
            task: stodos.task.toUpperCase(),
            isDone: true,
          };
        } else {
          return stodos;
        }
      })
    );
  };

  //  For keypress handle

  let handleKeyPress = (event) => {
    if (event.key === "Enter") {
      buttonClick();
    }
  };

  return (
    <div className="todo">
      <h2>Todo App</h2>
      <TextField
        label="Enter todo.."
        variant="outlined"
        value={newtodo}
        onChange={updatetodo}
        onKeyPress={handleKeyPress}
      />
      <br /> <br />
      <Button variant="contained" onClick={buttonClick} id="AddBtn">
        ADD Task
      </Button>
      <br />
      <br />
      <h2>Tasks todo:</h2>
      <ul className="ull">
        {todo.map((todos) => (
          <li key={todos.id} className="lii">
            <span
              style={todos.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todos.task}
            </span>
            <div className="btns">
              <Button
                id="delBtn"
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => deleteUpdate(todos.id)}
              >
                Delete
              </Button>
              &nbsp;&nbsp;
              <Button variant="outlined" onClick={() => MarksasDone(todos.id)}>
                Marks as Done
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
