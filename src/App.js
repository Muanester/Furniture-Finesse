import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./pages/shop/Shop";
import ShopCategory from "./pages/shopCategory/ShopCategory";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import LoginSignup from "./pages/loginSignup/LoginSignup";
import dining_banner from "./components/assets/images/dining_banner.jpg";
import seating_banner from "./components/assets/images/seating_banner.jpg";
import bedroom_banner from "./components/assets/images/bedroom_banner.jpg";
import Dashboard from "./pages/admin/dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/dining"
            element={
              <ShopCategory banner={dining_banner} category={"dining"} />
            }
          />
          <Route
            path="/seating"
            element={
              <ShopCategory banner={seating_banner} category={"seating"} />
            }
          />
          <Route
            path="/bedroom"
            element={
              <ShopCategory banner={bedroom_banner} category={"bedroom"} />
            }
          />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
