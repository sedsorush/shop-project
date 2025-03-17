import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import styles from "./product.module.scss";
import Stars from "../../components/Stars";
// import CartContext from "../../context/CartContext"
// import { ADD } from "../../App"
import { useDispatch } from "react-redux";
import { cartSlice } from "../../redux/slices/cartSlice";
import { store } from "../../redux";
import AuthContext from "../../context/authContext";

const Product = () => {
  const {auth} = useContext(AuthContext)
  const params = useParams();
  const [load, setLoad] = useState(true);
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState();
  const navigate = useNavigate();
  // const {dispatch} = useContext(CartContext)

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => {
        setProduct(res.data);
        setMainImage(res.data.thumbnail);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoad(false));
  }, []);

  const handleClick = (img) => {
    setMainImage(img);
  };

  const dispatch = useDispatch();
  const onClick = () => {
    if (auth) {
      dispatch(cartSlice.actions.addToCart(product));
    } else navigate("/login");
  };
  // const onClick = ()=>{
  //     dispatch({type: ADD , payLoad: product})
  // }

  if (load) return <Loader />;
  return (
    <div>
      <div className={styles.descriptives}>
        <div className={styles.imageBox}>
          <div className={styles.mainImage}>
            <img src={mainImage} alt="" />
          </div>
          <div className={styles.imageGallery}>
            {product.images?.map((image) => (
              <img key={image} src={image} onClick={() => handleClick(image)} />
            ))}
          </div>
        </div>
        <div className={styles.text}>
          <h1>{product.title}</h1>
          <strong>{product.category}</strong>
          <h3>{product.price}$</h3>
          <p>{product.description}</p>
          <div>
            <button onClick={onClick}>Add To Cart</button>
          </div>
        </div>
      </div>
      <div className={styles.reviews}>
        {product.reviews?.map((review) => (
          <div key={product.id}>
            <p>{new Date(review.date).toDateString()}</p>
            <p>
              <strong>{review.reviewerName}:</strong> {review.comment}
            </p>
            <div>
              <Stars rating={review.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
