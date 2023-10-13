import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/shop/Shop";
import ShopCategory from "./pages/shopCategory/ShopCategory";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import LoginSignup from "./pages/loginSignup/LoginSignup";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category={"men"} />} />
          <Route path="/womens" element={<ShopCategory category={"women"} />} />
          <Route path="/kids" element={<ShopCategory category={"kid"} />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
