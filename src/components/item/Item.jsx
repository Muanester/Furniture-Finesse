import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item">
      <div className="item-img">
        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
        </Link>
      </div>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new"> KSH. {props.new_price}</div>
        <div className="item-price-old"> KSH. {props.old_price}</div>
      </div>
    </div>
  );
}

export default Item;
