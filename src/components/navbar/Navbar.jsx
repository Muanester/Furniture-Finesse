import React, { useContext, useState } from "react";
import "./Navbar.css";
import cart_icon from "../assets/cart_icon.png";
import nav_icon from "../assets/menu.png";
import close_icon from "../assets/cart_cross_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("shop");

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <Link to={"/"}>
        <div className="nav-logo">
          <h1>
            Furniture<span className="danger">Finesse</span>
          </h1>
        </div>
      </Link>
      {/* <div className="nav-logo">
        <img src={logo} alt="" />
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <p>SHOPPER</p>
        </Link>
      </div> */}
      <div className="normal-screen-media">
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to={"/"}>Shop</Link> {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("dining");
            }}
          >
            <Link to={"/dining"}>Dining</Link>{" "}
            {menu === "dining" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("seating");
            }}
          >
            <Link to={"/seating"}>Seating</Link>{" "}
            {menu === "seating" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("bedroom");
            }}
          >
            <Link to={"/bedroom"}>Bedroom</Link>{" "}
            {menu === "bedroom" ? <hr /> : <></>}
          </li>

          <li>
            <Link to={"/admin"}>Admin</Link>
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to={"/login"}>
            <button>JOIN US</button>
          </Link>
          <Link to={"/cart"}>
            <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
          <div className="nav-menu-icon">
            <img onClick={toggleNavbar} src={nav_icon} alt="" />
          </div>
        </div>
      </div>

      <div className={`small-screen-media ${isOpen ? "open" : ""}`}>
        <div className="close-menu-icon">
          <img onClick={toggleNavbar} src={close_icon} alt="" />
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to={"/"}>Shop</Link> {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("dining");
            }}
          >
            <Link to={"/dining"}>Dining</Link>{" "}
            {menu === "dining" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("seating");
            }}
          >
            <Link to={"/seating"}>Seating</Link>{" "}
            {menu === "seating" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("bedroom");
            }}
          >
            <Link to={"/bedroom"}>Bedroom</Link>{" "}
            {menu === "bedroom" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to={"/login"}>
            <button>JOIN US</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
