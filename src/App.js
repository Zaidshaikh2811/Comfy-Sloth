import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
// import styled from "styled-components";

import {
  About,
  Checkout,
  Home,
  Error,
  Products,
  SingleProduct,
  Cart,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/">
            <Route index element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route
              path="/products/:id"
              element={<SingleProduct></SingleProduct>}
            ></Route>
            <Route
              path="/checkout"
              element={<PrivateRoute element={<Checkout />} />}
            />
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
