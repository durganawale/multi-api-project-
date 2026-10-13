import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import User from "./Components/User";
import Recipe from "./Components/Recipe";
import Product from "./Components/Product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
