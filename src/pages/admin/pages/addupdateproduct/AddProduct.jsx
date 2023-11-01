import React from "react";
import "./AddUpdateProduct.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="update_product">
      <div className="user_details ">
        <div className="user_details-inner">
          <Link to={"/admin"}>
            <AiOutlineClose className="addupdate_close" />
          </Link>
          <div className="add_product-title">
            <h1 className="">Add Product</h1>
          </div>
          <div>
            <input
              type="text"
              // value={products.title}
              // onChange={(e) =>
              //   setProducts({ ...products, title: e.target.value })
              // }
              name="title"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              // value={products.price}
              // onChange={(e) =>
              //   setProducts({ ...products, price: e.target.value })
              // }
              name="price"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              // value={products.imageUrl}
              // onChange={addUpload}
              name="imageurl"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              // value={products.category}
              // onChange={(e) =>
              //   setProducts({ ...products, category: e.target.value })
              // }
              name="category"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="title"
              // value={products.description}
              // onChange={(e) =>
              //   setProducts({ ...products, description: e.target.value })
              // }
              placeholder="Description"
            ></textarea>
          </div>
          <Link to={"/admin"}>
            <div className="add_update-div">
              <button
                // onClick={uploadProduct}
                className="add_update-btn"
              >
                Add Product
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
