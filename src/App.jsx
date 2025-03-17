import { Outlet } from "react-router-dom";
import styles from "./app.module.scss";
import Header from "./components/Header";
import CartContext from "./context/CartContext";
import { useEffect, useReducer, useState } from "react";
import AuthContext from "./context/authContext";
import { useSelector } from "react-redux";

export const ADD = "ADD";
export const RMV = "REMOVE";
export const DCRS = "DECREASE";
const cartReducer = (state, action) => {
  if (action.type === ADD) {
    const existingItem = state.find((item) => item.id === action.payLoad.id);

    if (existingItem) {
      return state?.map((item) =>
        item.id === action.payLoad.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }
    return [...state, { ...action.payLoad, quantity: 1 }];
  }

  if (action.type === RMV) {
    return state?.filter((item) => item.id !== action.payLoad.id);
  }

  if (action.type === DCRS) {
    const existingItem = state.find((item) => item.id === action.payLoad.id);

    if (existingItem.quantity === 1) {
      return state?.filter((item) => item.id !== action.payLoad.id);
    }
    return state.map((item) =>
      item.id === action.payLoad.id
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
  }

  return state;
};

function App() {
  const CART = "cart-Items";
  // const cartInitialValue = JSON.parse(localStorage.getItem(CART)) || []
  const cartItems = useSelector((state) => state.cart);

  const AUTH = "authentication";
  const authInitialValue = JSON.parse(sessionStorage.getItem(AUTH)) || null;
  const [auth, setAuth] = useState(authInitialValue);

  useEffect(() => {
    sessionStorage.setItem(AUTH, JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    localStorage.setItem(CART, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {/* <CartContext.Provider value={{cartItems,dispatch}} > */}
      <div className={styles.appContainer}>
        <Header />

        <Outlet />
      </div>
      {/* </CartContext.Provider> */}
    </AuthContext.Provider>
  );
}

export default App;
