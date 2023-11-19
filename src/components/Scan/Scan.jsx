/** @format */

// imports
import React from "react";

// styles
import styles from "./styles.module.css";

// assets
import ScanImage from "./assets/scan.png";

const Scan = () => {
  return (
    <div className={styles.scan}>
      <img src={ScanImage} alt='scan' />
      <div>
        <h6>Scan</h6>
        <p>
          Once we've identified your face shape, we curate a personalized selection of glasses that best suit you.
            Say goodbye to the guesswork and hello to a range of glasses that enhance your features flawlessly.
        </p>
      </div>
    </div>
  );
};

export default Scan;
