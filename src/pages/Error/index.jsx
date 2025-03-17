/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./error.module.scss";
import {
  isRouteErrorResponse,
  Link,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import axios from "axios";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className={styles.err}>
      <div className={styles.errorMessage}>
        {isRouteErrorResponse(error)
          ? "route error occured! the entered route does not exist!"
          : "something went wrong!"}
      </div>
      <button onClick={() => navigate("/")}>go back home</button>
    </div>
  );
};

export default Error;
