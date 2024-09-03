import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "./logo-header-1.png";
import searchLogo from "./magnifying-glass.png";
import heartImg from "./heart.png";
import shoppingCartImg from "./shopping-cart.png";
import menuImg from "./menu (2).png";
import "./Moreinformation.css";
function Moreinformation(props) {
  let { id } = useParams();
  console.log(props);
  let product = useSelector((state) =>
    state.cart.productsArray.find((item) => item.id === parseInt(id))
  );

  return (
    <div className="product-detail">
      <div className="header">
        <div className="navbar">
          <div className="left-part">
            <p className="logo">
              <img src={Logo} className="logo-img" />
            </p>
            <div className="category">
              <p href="" className="home">
                Home
              </p>
              <p href="" className="pages">
                Pages
              </p>
              <p href="" className="shop">
                Shop
              </p>
              <p href="" className="blog">
                Blog
              </p>
              <p href="" className="lookbook">
                LookBook
              </p>
              <p href="" className="element">
                Elements
              </p>
            </div>
          </div>
          <div className="right-part">
            <p className="login">Login</p>
            <img src={searchLogo} className="search" />
            <img src={heartImg} className="heart" />
            <img src={shoppingCartImg} className="shoppingCart" />

            <img src={menuImg} className="menu" />
          </div>
        </div>
      </div>
      {product ? (
        <>
          <div className="product-more-information">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-cart-items">
              <h1 className="product-title">{product.title}</h1>
              <p className="product-desc">{product.description}</p>
              <div className="price-order">
                <p className="product-price">{product.price} USD</p>
                <button className="order">Order Now</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default Moreinformation;
