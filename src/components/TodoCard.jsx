import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CustomButton from "./CustomButton";
import { deleteTodo, doneTodo } from "../redux/modules/todo";

const TodoCard = (props) => {
  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    const newTodoList = props.todoList.filter((todo) => todo.id !== id);
    dispatch(deleteTodo(newTodoList));
  };

  const doneTodoHandler = (props) => {
    // 맵으로 상태 변경한 요소 포함 새로운 배열 반환
    dispatch(
      doneTodo(
        props.todoList.map((todo) =>
          todo.id === props.todo.id
            ? {
                // isDone 값 변경 => 완료, 취소 표시
                id: todo.id,
                title: todo.title,
                body: todo.body,
                isDone: !todo.isDone,
              }
            : todo
        )
      )
    );
  };
  const TodoCardStyles = {
    border: "2px solid #ffff",
    borderRadius: "12px",
    padding: "12px 24px 24px",
    width: "270px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  const ViewDetailPage = {
    textDecoration: "none",
    color: "#655626",
    // border: "1px solid #e6e3e3",
    borderRadius: "10px",
    padding: "5px 5px",
  };
  const ButtonStyles = {
    display: "flex",
    gap: "10px",
    marginTop: "24px",
  };
  return (
    <div>
      <div style={{ ...TodoCardStyles }}>
        <Link style={{ ...ViewDetailPage }} to={`detail/${props.todo.id}`}>
          🔍 상세보기
        </Link>

        <h3 style={{ wordWrap: "break-word" }}>{props.todo.title}</h3>
        <div style={{ wordWrap: "break-word" }}>{props.todo.body}</div>
        <div style={{ ...ButtonStyles }}>
          <CustomButton
            color="black"
            borderColor="#d64553"
            txt="삭제하기"
            onClick={() => {
              deleteTodoHandler(props.todo.id);
            }}
          >
            삭제하기
          </CustomButton>
          <CustomButton
            color="black"
            borderColor="green"
            txt={props.todo.isDone === true ? "취소" : "완료"}
            onClick={() => {
              doneTodoHandler(props);
            }}
          >
            {props.todo.isDone === true ? "취소" : "완료"}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
