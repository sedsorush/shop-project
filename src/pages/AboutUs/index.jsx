/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./aboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.aboutBox}>
      <div>
        <h1>Shop Project</h1>
        <h2>created with React JS</h2>
      </div>
      <div>
        <p>
          you can browse products, based on their category or freely. and add
          any number of products to your cart granted you're logged in and
          authorized.
        </p>
        <p>products provided by dummyJSON APIs.</p>
        <p>authorization done based on dummyJSON APIs.</p>
      </div>
    </div>
  );
};

export default AboutUs;
