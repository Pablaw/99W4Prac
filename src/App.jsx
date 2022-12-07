// import React from "react";
// import styled from "styled-components";
// // !styled-components 임포트
// import { useState } from "react";
// import { useEffect } from "react";
// import { useSelector } from "react-redux"; // !Store에 연결된 module 사용하기 위해 컴포넌트에서 Store 조회 (React.redux의 hook)
// import { useDispatch } from "react-redux"; // !Action 객체를 Reducer에게 보내기 위해 사용(React.redux의 hook)

// // !styled-components props 사용하기
// const Stbox = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 1px solid ${(props) => props.borderColor};
//   margin: 20px;
//   border-radius: 10px;
// `;
// const boxList = ["red", "green", "blue", "black", "red"];

// // 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
// const getBoxName = (color) => {
//   switch (color) {
//     case "red":
//       return "빨간 박스";
//     case "green":
//       return "초록 박스";
//     case "blue":
//       return "파란 박스";
//     default:
//       return "검정 박스";
//   }
// };
// let num = 0;
// const App = () => {
//   return (
//     <div style={{ background: "gray", height: "100vh" }}>
//       {boxList.map((box) => {
//         return (
//           <Stbox key={num++} borderColor={box}>
//             {getBoxName(box)}
//           </Stbox>
//         );
//       })}
//     </div>
//   );
// };
//! 일반 state 업데이트, 함수형 state 업데이트
// const App = () => {
//   const [regNumber, setRegNumber] = useState(0);
//   const [fnNumber, setFnNumber] = useState(0);
//   return (
//     <div>
//       {/* 버튼을 누르면 1씩 플러스된다. */}
//       <div>
//         일반 업데이트{regNumber}(1씩 증가, batch로 modfier 3개를 모아서 처리 )
//       </div>
//       <button
//         onClick={() => {
//           setRegNumber(regNumber + 1); // 첫번째 줄
//           setRegNumber(regNumber + 1); // 두번쨰 줄
//           setRegNumber(regNumber + 1); // 세번째 줄
//         }}
//       >
//         일반 숫자
//       </button>
//       {/* 버튼을 누르면 3씩 플러스된다. */}
//       <div>함수형 업데이트{fnNumber}(3씩 증가, modifier 3개)</div>
//       <button
//         onClick={() => {
//           setFnNumber((cur) => cur + 1); // 첫번째 줄
//           setFnNumber((cur) => cur + 1); // 두번쨰 줄
//           setFnNumber((cur) => cur + 1); // 세번째 줄
//         }}
//       >
//         함수형 숫자
//       </button>
//     </div>
//   );
// };
// // !리액트 훅(React Hook) useEffect
// // // ?콘솔창에 2번씩 출력되는 이유, stricemode?
// // // ?mount, unmount 리액트의 라이프사이클?
// // // ?props drilling?
// const App = () => {
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     console.log("hello useEffect");
//   }, []);
//   //! useEffect(() => {}, []);
//   //! 렌더링될 때마다 useEffect 내 함수가 실행된다. []에 의존성 배열을 작성해서 조건을 정할 수 있다.
//   //? useLayoutEffect? 브라우저 렌더링관련
//   return (
//     <div>
//       <input
//         type="text"
//         value={value}
//         onChange={(event) => {
//           setValue(event.target.value);
//         }}
//       />
//     </div>
//   );
// };

// // src/App.js
// // ! redux ducks, thunks, epics

// import { plusOne, minusOne } from "./redux/modules/counter";

// const App = () => {
//   //   const counterStore = useSelector((state) => state); 스토어에 state 값 조회
//   //   const counterStore = useSelector((state) => state);
//   const number = useSelector((state) => state.counter.number);
//   const dispatch = useDispatch();
//   console.log(number);
//   return (
//     <div>
//       <div>Count: {number}</div>
//       <button
//         onClick={() => {
//           // !액션 객체, 리듀서에게 명령 type 키 값 필요
//           dispatch(minusOne());
//           // !dispatch는 hook 임포트 후 함수 형태로 작성
//         }}
//       >
//         -1
//       </button>
//       <button
//         onClick={() => {
//           // !액션 객체, 리듀서에게 명령 type 키 값 필요
//           dispatch(plusOne());
//           // !dispatch는 hook 임포트 후 함수 형태로 작성
//         }}
//       >
//         +1
//       </button>
//     </div>
//   );
// };

// export default App;

// !======Redux 학습 내용=====!

// import React from "react";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addNumber, substractNumber } from "./redux/modules/counter";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const onChangeHandler = (e) => {
//     let value = e.target.value;
//     setNumber(Number(value));
//   };

//   const globalNumber = useSelector((state) => state.counter.number);
//   // !더하기 dispatch 핸들러 함수, onChange 인풋값 state로 가져옴
//   const addNumberHandler = () => {
//     dispatch(addNumber(number));
//     setNumber("");
//   };
//   // !빼기 dispatch 핸들러 함수, onChange 인풋값 state로 가져옴
//   const substractNumberHandler = () => {
//     dispatch(substractNumber(number));
//     setNumber("");
//   };
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <div>{globalNumber}</div>
//       <input type="number" value={number} onChange={onChangeHandler} />
//       <button onClick={addNumberHandler}>더하기</button>
//       <button onClick={substractNumberHandler}>빼기</button>
//     </div>
//   );
// };

// !======Redux 학습 내용=====!

// !======react-router-dom 학습 내용=====!
import Router from "./shared/Router";

function App() {
  return <Router />;
}

// ?HTTP, URL, URI?
// ?useMemo, 최적화 React Hook
// ?CodeSandbox 다른 사람 코드 찾아보기.
// !React query, Redux query, Recoil

export default App;
