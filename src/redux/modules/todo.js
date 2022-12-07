// Action Value // !Atciton Type

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";

// Action Creator // !Action Creaator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
    payload: payload,
  };
};

// !Initial State
const initialState = {
  todoArr: [
    {
      id: 1,
      title: "리액트 학습",
      body: "학습1",
      isDone: false,
    },
  ],
};

// !Reducer
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todoArr: [...state.todoArr, action.payload],
      };
    case DELETE_TODO:
      return {
        todoArr: [...(state.todoArr = action.payload)],
      };
    case DONE_TODO:
      return {
        todoArr: [...(state.todoArr = action.payload)],
      };
    default:
      return state;
  }
};

// !Module 안에 Action Type, Action Creator, Reducer가 모두 존재하는 Redux 구성 방식이 Ducks 타입 작성방식이다.

export default todo;
