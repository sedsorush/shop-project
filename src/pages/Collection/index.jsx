/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./collection.module.scss";
// import { categories } from '../../constants/mockData'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Item from "../../components/Item";
import Loader from "../../components/Loader";

const Collection = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${param.category}`)
      .then((res) => {
        console.log(res);
        setProducts(res.data.products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoad(false));
  });

  const param = useParams();

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  // const imageSrc = categories.filter((item)=> item.title===param.category)

  // const [image] = imageSrc
  if (load) return <Loader />;
  return (
    <div className={styles.collection}>
      <h1>{`Collection of ${param.category}`}</h1>

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

export default Collection;
