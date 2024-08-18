import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import { Cart, ProductSingle, Product } from "@pages";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductSingle />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
