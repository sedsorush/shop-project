import { useContext } from "react";
import styles from "./checkout.module.scss";
import CartContext from "../../context/CartContext";
import { DCRS, RMV } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../redux/slices/cartSlice";

const Checkout = () => {
  // const {cartItems , dispatch} = useContext(CartContext)
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className={styles.checkout}>
      <div className={styles.cart}>
        {cartItems.length ? (
          cartItems?.map((items) => (
            <div className={styles.cartContainer} key={items.id}>
              <div className={styles.itemInTheCart}>
                <img src={items.thumbnail} alt="" />
                <h1>{items.title}</h1>
                <p>{items.price}$</p>
                <span>{items.quantity}</span>
                <p>{Math.trunc(items.price * items.quantity)}$</p>
              </div>
              <button
                onClick={() => {
                  dispatch(cartSlice.actions.removeFromCart(items.id));
                }}>
                Remove
              </button>
              <button
                onClick={() => {
                  dispatch(cartSlice.actions.decreaseFromCart(items.id));
                }}>
                Decrease
              </button>
            </div>
          ))
        ) : (
          <p className={styles.emptyCart}>your cart is empty!</p>
        )}
      </div>
      <div className={styles.bill}>
        <h1>ORDER SUMMARY</h1>
        <h2>
          Total:{" "}
          {cartItems?.reduce((acc, item) => {
            return acc + item.price * item.quantity;
          }, 0)}
          $
        </h2>
      </div>
    </div>
  );
};

export default Checkout;
