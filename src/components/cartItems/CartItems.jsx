import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

function CartItems() {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-scroll">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className="cartitems-format cartitems-format-main">
                  <div className="cartitems-icon-div">
                    <img
                      src={e.image}
                      alt=""
                      className="carticon-product-icon"
                    />
                  </div>
                  <p>{e.name} </p>
                  <p>KSH. {e.new_price} </p>
                  <button className="cartitems-quantity">
                    {" "}
                    {cartItems[e.id]}{" "}
                  </button>
                  <p>KSH. {e.new_price * cartItems[e.id]} </p>
                  <img
                    className="cartitems-remove-icon"
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    src={remove_icon}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>KSH. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>KSH. {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PAY NOW</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you got from a referal, enter there name(s) here:</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Referal name" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
