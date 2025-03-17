/* eslint-disable react/prop-types */
import { TiStarOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import styles from "./stars.module.scss";

const Stars = ({ rating }) => {
  return (
    <div className={styles.stars}>
      {rating > 1 ? <TiStarFullOutline /> : <TiStarOutline />}
      {rating > 2 ? <TiStarFullOutline /> : <TiStarOutline />}
      {rating > 3 ? <TiStarFullOutline /> : <TiStarOutline />}
      {rating > 4 ? <TiStarFullOutline /> : <TiStarOutline />}
      {rating > 5 ? <TiStarFullOutline /> : <TiStarOutline />}
    </div>
  );
};

export default Stars;
