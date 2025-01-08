import React from "react";
import {  Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
};

export default Dashboard;
