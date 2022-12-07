import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CustomButton from "../components/CustomButton";
import Header from "../components/Header";

function TodoDetails() {
  const navigate = useNavigate();

  const { id } = useParams();

  let pageTitle = "";
  id ? (pageTitle = "🔍디테일") : (pageTitle = "🏠메인");

  const todoList = useSelector((state) => state.todo.todoArr);
  const findTodoDetail = todoList.find((todo) => todo.id === Number(id));
  console.log(findTodoDetail);
  const DetailLayout = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };
  const ContainerStyles = {
    display: "flex",
    alignItems: "center",
    minHeight: "90vh",
  };
  const DetailTodoContainer = {
    width: "600px",
    height: "400px",
    border: "2px solid rgb(207, 197, 197)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    // justifyContent: "space-between",
  };
  const DetailTodoHeader = {
    display: "flex",
    height: "80px",
    justifyContent: "space-between",
    padding: "0 24px",
    alignItems: "center",
  };
  const DetailContentStyles = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "24px",
    // alignItems: "center",
  };
  return (
    <div style={{ ...DetailLayout }}>
      <Header pageTitle={pageTitle} />
      <div style={{ ...ContainerStyles }}>
        <div style={{ ...DetailTodoContainer }}>
          <div style={{ ...DetailTodoHeader }}>
            <div>TODO-ID: {id}</div>
            <CustomButton
              borderColor="rgb(141, 133, 133)"
              color="rgb(102, 94, 94)"
              txt="이전으로"
              onClick={() => {
                navigate(-1);
              }}
            />
          </div>
          <div style={{ ...DetailContentStyles }}>
            <h1>{findTodoDetail.title}</h1>
            <div>{findTodoDetail.body}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetails;
