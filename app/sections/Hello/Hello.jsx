// src/Slider.js
import React from "react";
import styles from "./Hello.module.css";
// import CompanyOne from "../../../public/company/1.png";
// import CompanyTwo from "../../../public/company/2.png";
// import CompanyThree from "../../../public/company/3.png";
import CompanyFour from "../../../public/company/4.png";
import CompanyFive from "../../../public/company/5.png";
import CompanySix from "../../../public/company/6.png";
import CompanySeven from "../../../public/company/7.png";
import CompanyOne from "../../../public/dribbleshots/db1.png";
import CompanyTwo from "../../../public/dribbleshots/db2.png";
import CompanyThree from "../../../public/dribbleshots/db3.png";
import Image from "next/image";

const HelloSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        <div className={styles.slide}>
          <Image src={CompanyOne} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyTwo} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyThree} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyOne} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyTwo} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyThree} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyOne} />
        </div>
        {/* Duplicate slides */}
        <div className={styles.slide}>
          <Image src={CompanyTwo} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyThree} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyOne} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyTwo} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyThree} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyOne} />
        </div>
        <div className={styles.slide}>
          <Image src={CompanyTwo} />
        </div>
      </div>
    </div>
  );
};

export default HelloSlider;
