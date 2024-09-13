import "./App.css";
import { Fragment } from "react";
import Home from "./pages/home";
import Shop from "./pages/shop";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import SingleProduct from "./pages/singleProduct";
import CheckOut from "./pages/checkOut";
import Cart from "./pages/cart";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="singleProduct/:id" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkOut" element={<CheckOut />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
