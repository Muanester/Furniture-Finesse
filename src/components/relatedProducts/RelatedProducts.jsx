import React from "react";
import "./RelatedProducts.css";
import data_product from "../assets/all_product";
import Item from "../item/Item";

function RelatedProducts(props) {
  const { product } = props;
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product
          .filter((obj) => obj.category.includes(product.category))
          .map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
      </div>
    </div>
  );
}

export default RelatedProducts;
