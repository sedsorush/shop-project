/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./item.module.scss";

const Item = ({ title, subtitle, image, onClick , titleInSmallerFont }) => {
  return (
    <div className={styles.itemBox} onClick={onClick}>
      {image?<img src={image} alt="" />:null}
      <div className={styles.text}>
        <h3>{title}</h3>
        <h2>{titleInSmallerFont}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Item;
