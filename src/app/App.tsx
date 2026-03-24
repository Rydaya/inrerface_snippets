import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  ProductPage,
  ProductPagePagination,
  CarouselPage,
  AccordionPage,
  TabsPage,
  DropdownPage,
  ClickOverlayPage,
  MenuPage,
  ButtonPage,
} from "../pages";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/buttons" element={<ButtonPage />} />
          <Route path="/pagination" element={<ProductPagePagination />} />
          <Route path="/carousel" element={<CarouselPage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/tabs" element={<TabsPage />} />
          <Route path="/dropdown" element={<DropdownPage />} />
          <Route path="/clickOverlay" element={<ClickOverlayPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
