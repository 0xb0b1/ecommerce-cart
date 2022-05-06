import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import { CartProvider } from "./hooks/useCart";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import GlobalStyles from "./styles/global";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <ToastContainer autoClose={2000} />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
