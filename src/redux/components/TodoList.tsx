import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { switchTodo, removeTodo } from "../modules/todos";
import styled from "styled-components";
import { RootState } from "../config/configStore";
import Todo from "../modules/todos";

type IsDone = {
  isDone: boolean;
};
interface TodoListProps {
  isActive: boolean;
}

function TodoList({ isActive }: TodoListProps) {
  const todos = useSelector((state: RootState) => state.todos);
  // console.log("todos", todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteButtonClick = (id: string): void => {
    dispatch(removeTodo(id));
  };

  const handleSwitchButtonClick = (id: string): void => {
    dispatch(switchTodo(id));
  };

  return (
    <StyledListBox>
      <h2>{isActive ? "🚀 Working Lists" : "🧸 Done Lists"}</h2>
      {todos
        ?.filter((item: Todo) => item.isDone === !isActive)
        .map((item: Todo) => {
          return (
            <StyledTodoBox key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <button onClick={() => handleSwitchButtonClick(item.id)}>
                {isActive ? "⚡️ Complete" : "💨 Back to work"}
              </button>
              <button onClick={() => handleDeleteButtonClick(item.id)}>
                🍫 Delete
              </button>
              <br />
              <br />
              <button
                onClick={() => {
                  navigate(`/${item.id}`);
                }}
              >
                🧐 Detail
              </button>
            </StyledTodoBox>
          );
        })}
    </StyledListBox>
  );
}

export default TodoList;

const StyledListBox = styled.div`
  background-color: #20201f;
  padding: 20px;
`;

const StyledTodoBox = styled.div`
  background-color: #060606;
  color: white;
  padding: 10px;
  margin: 5px;
`;
