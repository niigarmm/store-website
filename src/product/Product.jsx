import "./Product.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch,useSelector } from "react-redux";
import { addtoCart,removefromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Product({ photo, title, description, price, id }) {
  let dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cart.cart);
  let isProductInCart = cartItems.some((item) => item.id === id);
  let [iconColor, setIconColor] = useState(isProductInCart ? "red" : "black");

  let handleIconClick = () => {
    if (iconColor === "black") {
      dispatch(addtoCart({ photo, title, description, price, id }));
      setIconColor("red"); 
    } else {
      dispatch(removefromCart({ id }));
      setIconColor("black"); 
    }
    // setIconColor((prevColor) => (prevColor === "black" ? "red" : "black"));
  };
  return (
    <div className="product-cart">
      <button
        className="like"
        // onClick={() =>
        //   dispatch(addtoCart({ photo, title, description, price, id }))
        // }
      >
        <FontAwesomeIcon
          icon={faHeart}
          onClick={handleIconClick}
          style={{ color: iconColor }}
        />
      </button>
      <button className="trash">
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <img src={photo} className="image" />
      <div className="product-information">
        <h2 className="product-name">{title}</h2>
        <p className="price">{price} USD</p>
        <Link to={`/products/${id}`}>
          <button className="more-information">Learn More</button>
        </Link>
      </div>
    </div>
  );
}
