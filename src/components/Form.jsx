import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import CustomButton from "./CustomButton";
import { addTodo } from "../redux/modules/todo";

const FormStyles = {
  backgroundColor: "#eee",
  borderRadius: "12px",
  justifyContent: "space-between",
  margin: "0 auto",
  padding: "30px",
  display: "flex",
};
const InputStyles = {
  border: "none",
  borderRadius: "12px",
  height: "40px",
  padding: "0 12px",
  width: "240px",
};
const InputGroupStyles = {
  alignItems: "center",
  display: "flex",
  gap: "20px",
};

const Form = () => {
  const [state, setState] = useState({ title: "", body: "" });
  // 타이틀, 묶어서 스테이트 처리
  const dispatch = useDispatch();

  const titleInput = useRef();

  const eventHander = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setState({ ...state, [id]: value });
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      title: state.title,
      body: state.body,
      isDone: false,
    };
    if (state.title && state.body !== "") {
      dispatch(addTodo(newTodo));
      //   setTodos([...todos, newTodo]);
      // setTitle("");
      // setBody("");
      setState({ title: "", body: "" });
    }
    titleInput.current.focus();
  };
  return (
    <div style={{ ...FormStyles }}>
      <form style={{ ...InputGroupStyles }}>
        <label className="form-label">{"제목"}</label>
        <input
          style={{ ...InputStyles }}
          id="title"
          maxLength={30}
          className="add-input"
          value={state.title}
          // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
          // onChange={(e) => setTitle(e.target.value)}
          onChange={eventHander}
          ref={titleInput}
        />
        {/* 제한조건 유효값 입력, 빈칸 제한 */}
        <label className="form-label">{"내용"}</label>
        <input
          style={{ ...InputStyles }}
          id="body"
          maxLength={35}
          className="add-input"
          value={state.body}
          // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
          // onChange={(e) => setBody(e.target.value)}
          onChange={eventHander}
        />
        <CustomButton
          color="#fff"
          bgcolor="teal"
          txt="추가하기"
          onClick={addTodoHandler}
        >
          추가하기
        </CustomButton>
      </form>
    </div>
  );
};

export default Form;
