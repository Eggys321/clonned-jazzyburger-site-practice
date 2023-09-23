import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbars from "./layouts/Navbars";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbars/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/CheckOut" element={<CheckOut/>}/>
          {/* <Route path="/Cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
