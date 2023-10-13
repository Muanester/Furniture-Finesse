import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import ProductDisplay from "../../components/productDisplay/ProductDisplay";
import DescriptionBox from "../../components/descriptionBox/DescriptionBox";

function Product() {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
    </div>
  );
}

export default Product;
