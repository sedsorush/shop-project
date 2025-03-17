import { RiLoader5Line } from "react-icons/ri";
import styles from "./loader.module.scss";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <RiLoader5Line />
    </div>
  );
};

export default Loader;
