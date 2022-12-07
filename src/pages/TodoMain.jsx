import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";

const TodoMain = () => {
  const { id } = useParams();
  let pageTitle = "";
  id ? (pageTitle = "🔍디테일") : (pageTitle = "🏠메인");

  const ContainerStyles = {
    width: "100%",
  };
  return (
    <div style={{ ...ContainerStyles }}>
      <Header pageTitle={pageTitle} />
      <Form />
      <List />
    </div>
  );
};

export default TodoMain;
