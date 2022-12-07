import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoMain from "../pages/TodoMain";
import TodoDetails from "../pages/TodoDetails";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="" element={<TodoMain />} />
          <Route path="/detail/:id" element={<TodoDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

// import React from "react";
// // 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/Abuout";
// import Contact from "../pages/Contact";
// import Works from "../pages/Works";
// // !Layout 컴포넌트를 만들어서 children props를 활용한 컴포넌트 합성(composition)
// import Layout from "./Layout";

// // 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
// //BrowserRouter를 Router로 감싸는 이유는,
// //SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Layout>
//         {/* // ! Layout 컴포넌트로 Routes를 감싸준다.*/}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="works" element={<Works />} />
//           <Route path="works/:id" element={<Works />} />
//           // !useParams hook 사용 동적 라우팅
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Works from "../pages/Works";
// import Layout from "./Layout";
// import Work from "../pages/Work";

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           {/*
// 						Routes안에 이렇게 작성합니다.
// 						Route에는 react-router-dom에서 지원하는 props들이 있습니다.

// 						path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
// 						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
// 				 */}
//           <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="works" element={<Works />} />
//           <Route path="works/:id" element={<Work />} />
//           // ! useParam 적용되는 부분.
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };
