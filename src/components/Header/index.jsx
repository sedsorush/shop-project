/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import styles from "./header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import CartContext from "../../context/CartContext";
import { IoIosLogIn } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import AuthContext from "../../context/authContext";
import { useSelector } from "react-redux";

const Header = () => {
  // const {cartItems} = useContext(CartContext)
  const cartItems = useSelector((state) => state.cart);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/checkout`);
  };
  const onClickLog = () => {
    navigate(`/Login`);
  };

  return (
    <div className={styles.headerContainer}>
      <h1>WELCOME</h1>
      <ul>
        <li>
          <CiShoppingCart
            fontSize={25}
            onClick={auth ? onClick : onClickLog}
          />
          <span>{auth ? cartItems?.length : 0}</span>
        </li>
        <li className={styles.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#000000] font-semibold" : ""
            }
            to="">
            Home
          </NavLink>
        </li>
        <li className={styles.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#000000] font-semibold" : ""
            }
            to="shop">
            Shop
          </NavLink>
        </li>
        <li className={styles.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#000000] font-semibold" : ""
            }
            to="aboutus">
            About Us
          </NavLink>
        </li>
        {console.log(auth)}
        <li>
          {auth ? (
            <CiUser fontSize={25} onMouseEnter={()=>userInfo()} />
          ) : (
            <IoIosLogIn fontSize={25} onClick={onClickLog} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
