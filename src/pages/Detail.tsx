import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";

type DetailType = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

function Detail() {
  const params = useParams();
  const navigate = useNavigate();

  const todos = useSelector((state: RootState) => {
    return state.todos;
  });

  const detailTodo = todos.find((item: DetailType) => {
    return item.id === params.id;
  });
  return (
    <>
      <h1>{detailTodo?.title}</h1>
      <h5>{detailTodo?.contents}</h5>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        돌아가기
      </button>
    </>
  );
}

export default Detail;
