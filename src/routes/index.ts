import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/cart" />
    </Routes>
  );
};
