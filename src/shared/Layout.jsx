// src/shared/Layout.js
import React from "react";

const ContainerStyles = {
  margin: "0 auto",
  maxWidth: "1200px",
  minWidth: "800px",
};
const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
};

function Layout({ children }) {
  return (
    <div style={{ ...ContainerStyles }}>
      <div style={{ ...layoutStyles }}>{children}</div>
    </div>
  );
}

export default Layout;
