import React from "react";
import { useSelector } from "react-redux";

import TodoCard from "./TodoCard";

const List = () => {
  const todoList = useSelector((state) => state.todo.todoArr);
  const todoListStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  };

  return (
    <div>
      <h2 className="working-list-title">Working..🔥</h2>
      <div style={{ ...todoListStyles }}>
        {todoList.map((todo) => {
          return todo.isDone ? null : (
            <TodoCard todoList={todoList} todo={todo} key={todo.id}></TodoCard>
          );
        })}
      </div>
      <h2 className="working-list-title">Done..!🎉</h2>
      <div style={{ ...todoListStyles }}>
        {todoList.map((todo) => {
          return todo.isDone ? (
            <TodoCard todoList={todoList} todo={todo} key={todo.id}></TodoCard>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default List;
