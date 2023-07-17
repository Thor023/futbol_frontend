import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import "./App.css";

import RegisterForm from "./components/RegisterForm/RegisterForm"; // Importa el componente RegisterForm
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </Router>
  );
}
