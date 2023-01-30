import { useState } from "react";
import "./App.css";
import { routes } from "./routes";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import HelloChat from "./pages/askAI/helloChat";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import AuthLayout from "./layout/AuthLayout";
import HomePage from "./pages/homePage/homePage";
import Asteriod from "./pages/asteriod/asteriod";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<AuthLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/askAi' element={<HelloChat />} />

          <Route
            path='/of-the-day/asteriod-of-the-day'
            element={<Asteriod />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
