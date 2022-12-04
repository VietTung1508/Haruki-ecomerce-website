import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.scss";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
