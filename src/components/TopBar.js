import React from "react";

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: "#DFBAE4",
    borderBottom: "1px solid #D11BE9",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={topBarStyle}>
      <span>{'😺️'}</span>
      App
      <span>{'⚙️'}</span>
    </div>
  );
};

export default TopBar;

