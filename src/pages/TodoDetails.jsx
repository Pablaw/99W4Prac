import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CustomButton from "../components/CustomButton";

function TodoDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const todoList = useSelector((state) => state.todo.todoArr);
  const findTodoDetail = todoList.find((todo) => todo.id === Number(id));
  console.log(findTodoDetail);

  const DetailTodoContainer = {
    width: "600px",
    height: "400px",
    border: "2px solid rgb(207, 197, 197)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  const DetailTodoHeader = {
    display: "flex",
    height: "80px",
    justifyContent: "space-between",
    padding: "0 24px",
    alignItems: "center",
  };
  return (
    <div style={{ ...DetailTodoContainer }}>
      <div style={{ ...DetailTodoHeader }}>
        <div>TODO-ID: {id}</div>
        <CustomButton
          bgcolor="#eeeeee"
          color="black"
          txt="이전으로"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <h2>{findTodoDetail.title}</h2>
      <div>{findTodoDetail.body}</div>
    </div>
  );
}

export default TodoDetails;
