import "./Checkout.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { removefromCart } from "./redux/cartSlice";

function Checkout() {
  let cartitems = useSelector((state) => state.cart.cart);
  let dispatch = useDispatch();
  return (
    <div className=" checkout">
      <h2 className="checkout-h">CheckOut</h2>
      <div className="product-list-item">
        {cartitems.map((item) => {
          return (
            <div className="product-cart-item">
              <button className="like">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button
                className="trash"
                onClick={() => dispatch(removefromCart({id:item.id}))}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <img src={item.photo} className="image" />
              <div className="product-information">
                <h2 className="product-name">{item.title}</h2>
                <p className="price">{item.price} USD</p>
                <button className="more-information">Learn More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Checkout;
