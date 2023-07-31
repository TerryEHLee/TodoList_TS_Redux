import React from "react";
import Input from "../redux/components/Input";
import TodoList from "../redux/components/TodoList";

function Main() {
  return (
    <div>
      <Input />
      <TodoList />
      <TodoList />
    </div>
  );
}

export default Main;
