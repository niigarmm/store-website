import Footer from "./footer/Footer";
import Product from "./product/Product";
import Logo from "./logo-header-1.png";
import searchLogo from "./magnifying-glass.png";
import heartImg from "./heart.png";
import shoppingCartImg from "./shopping-cart.png";
import menuImg from "./menu (2).png";
import "./Home.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {addDataToStore} from "./redux/cartSlice"
function Home() {
  let cartItems = useSelector((state) => state.cart.cart);
  let dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(addDataToStore({data:data}))

      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  let productsArray = useSelector(state => state.cart.productsArray);
  console.log("netice:", productsArray)

  return (
    <div className="Home">
      <div className="header">
        <div className="navbar">
          <div className="left-part">
            <div className="logo">
              <img src={Logo} className="logo-img" />
            </div>
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
            <Link to="/checkout">
              <img src={shoppingCartImg} className="shoppingCart" />
              <small className="small">{cartItems.length}</small>
            </Link>
            <img src={menuImg} className="menu" />
          </div>
        </div>
      </div>
      <div className="input-part">
        <input
          type="text"
          placeholder="search product"
          className="search-part"
        />
      </div>
      <div className="product-list">
        {productsArray.map((products) => (
          <Product
            key={products.id}
            product={products}
            photo={products.image}
            title={products.title}
            description={products.description}
            price={products.price}
            id={products.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
