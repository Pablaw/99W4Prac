import React from "react";

function Header({ pageTitle }) {
  const HeaderStyles = {
    alignItems: "center",
    border: "1px solid #ddd",
    display: "flex",
    height: "50px",
    justifyContent: "space-between",
    padding: "0 20px",
    backgroundColor: "#0e1116",
    color: "white",
  };
  return (
    <div style={{ ...HeaderStyles }}>
      <div>{`My Todo List (${pageTitle})`}</div>
      <div>React</div>
    </div>
  );
}

export default Header;
