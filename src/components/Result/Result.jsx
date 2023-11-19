/** @format */

// imports
import React from "react";

// styles
import styles from "./styles.module.css";

// assets
import ResultImage from "./assets/result.png";

const Result = () => {
  return (
    <div className={styles.result}>
      <h6>Result</h6>
      <img src={ResultImage} alt='result' />
      <div>
        <p>
          we understand that finding the right glasses can transform not just your look,
            but your confidence. Picture yourself in glasses that truly complement your unique
            face shape. We're here to make that happen.
        </p>
        <p>
          Using cutting-edge facial recognition technology, our app analyzes your face shape in seconds.
            Simply upload your photo, and voilà! Our advanced algorithms determine your face shape with precision.
        </p>
      </div>
    </div>
  );
};

export default Result;
