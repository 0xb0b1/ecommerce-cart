import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
