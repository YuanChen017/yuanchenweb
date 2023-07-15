import React from "react";
const Admin = () => {
  return (
    <div
      className="Admin"
      style={{ backgroundColor: "gray", position: "relative", height: "70vh" }}
    >
      <h1>Store Admin system</h1>
      <div
        className="main"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          className="adminMenu"
          style={{ backgroundColor: "yellow", width: "15%", height: "60vh" }}
        >
          here is menu
        </div>
        <div
          className="adminMainWindow"
          style={{ backgroundColor: "red", width: "85%", height: "60vh" }}
        >
          here is main window shown
        </div>
      </div>
    </div>
  );
};
export default Admin;
