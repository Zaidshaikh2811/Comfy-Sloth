import React from "react";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";

import {
  About,
  Checkout,
  Home,
  Error,
  Products,
  SingleProduct,
  Cart,
} from "./pages";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <Sidebar />
    {children}
    <Footer></Footer>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="/products/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

{
  /* <Footer></Footer> */
}
export default App;
