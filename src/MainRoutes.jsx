import React from "react";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent/AddStudent";
import HomePage from "./components/HomePage/HomePage";
import Users from "./components/Users/Users";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/add-student" element={<AddStudent />} />
    </Routes>
  );
};

export default MainRoutes;
