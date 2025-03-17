/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Item from "../../components/Item";
import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        console.log(res);
        setProducts(res.data.products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoad(false));
  });

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  if (load) return <Loader />;
  return (
    <div className={styles.collection}>
      <div className={styles.itemContainer}>
        {products.map((item) => (
          <Item
            key={item.id}
            titleInSmallerFont={item.title}
            subtitle={item.description}
            image={item.thumbnail}
            onClick={() => handleClick(item.id)}>
            {item.title}
          </Item>
        ))}
      </div>
    </div>
  );
};

export default Home;
