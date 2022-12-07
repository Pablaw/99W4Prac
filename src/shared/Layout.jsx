// src/shared/Layout.js

import React from "react";

const ContainerStyles = {
  margin: "0 auto",
  maxWidth: "1200px",
  minWidth: "800px",
};

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

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
};

function Header() {
  return (
    <div style={{ ...HeaderStyles }}>
      <div>My Todo List</div>
      <div>React</div>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div style={{ ...ContainerStyles }}>
      <Header />
      <div style={{ ...layoutStyles }}>{children}</div>
    </div>
  );
}

export default Layout;
