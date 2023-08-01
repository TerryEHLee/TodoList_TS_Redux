import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../modules/todos";
import uuid from "react-uuid";
import styled from "styled-components";

function Input() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();
  const handleSubmitButtonClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTodo(title, contents));

    setTitle("");
    setContents("");
  };

  const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentsInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContents(e.target.value);
  };

  return (
    <StyledInputBox>
      <form onSubmit={handleSubmitButtonClick}>
        <label>
          🍏 Title:
          <input onChange={handleTitleInputChange} value={title} type='text' />
        </label>
        <label>
          🍎 Contents:
          <input
            onChange={handleContentsInputChange}
            value={contents}
            type='text'
          />
        </label>
        <button type='submit'>add⚡️</button>
      </form>
    </StyledInputBox>
  );
}

const StyledInputBox = styled.div`
  background-color: #616464;
  padding: 20px;
`;

export default Input;
