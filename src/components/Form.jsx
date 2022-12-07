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
const InputGroupStyles = {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  width: "100%",
};
const InputContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "65%",
};
const InputStyles = {
  border: "none",
  borderRadius: "12px",
  height: "40px",
  padding: "0 12px",
  width: "240px",
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
      setState({ title: "", body: "" });
    }
    titleInput.current.focus();
  };
  return (
    <div style={{ ...FormStyles }}>
      <form style={{ ...InputGroupStyles }}>
        <div style={{ ...InputContainer }}>
          <label className="form-label">{"제목"}</label>
          <input
            style={{ ...InputStyles }}
            id="title"
            maxLength={30}
            className="add-input"
            value={state.title}
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={eventHander}
            ref={titleInput}
          />
          <label className="form-label">{"내용"}</label>
          <input
            style={{ ...InputStyles }}
            id="body"
            maxLength={35}
            className="add-input"
            value={state.body}
            // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
            onChange={eventHander}
          />
        </div>

        <CustomButton
          color="black"
          borderColor="teal"
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
