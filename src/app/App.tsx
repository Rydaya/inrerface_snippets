import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, ProductPagePagination } from "../pages";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/pagination" element={<ProductPagePagination />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
