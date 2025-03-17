/* eslint-disable no-unused-vars */
import styles from "./shop.module.scss";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Item from "../../components/Item";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const [load, setLoader] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .finally(() => setLoader(false));
  }, []);

  const clickHandle = (cat) => {
    navigate(`collection/${cat}`);
  };
  if (load) return <Loader />;
  return (
    <div className={styles.menuContainer}>
      {categories.map((item) => (
        <Item
          key={item.slug}
          title={item.name}
          subtitle=""
          onClick={() => clickHandle(item.slug)}
        />
      ))}
    </div>
  );
};

export default Shop;
