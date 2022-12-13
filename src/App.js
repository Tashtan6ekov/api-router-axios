import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavbarCustom from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
// https://jsonplaceholder.typicode.com/users

const App = () => {
  return (
    <BrowserRouter>
      <NavbarCustom />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
