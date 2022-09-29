import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
