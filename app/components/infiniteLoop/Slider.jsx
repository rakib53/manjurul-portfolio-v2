// src/Slider.js
import React from "react";
import "./Slider.css";
import CompanyOne from "../../../public/companies/1.png";
import CompanyTwo from "../../../public/companies/2.png";
import CompanyThree from "../../../public/companies/3.png";
import CompanyFour from "../../../public/companies/4.png";
import CompanyFive from "../../../public/companies/5.png";
import CompanySix from "../../../public/companies/6.png";
import CompanySeven from "../../../public/companies/7.png";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <Image src={CompanyOne} />
        </div>
        <div className="slide">
          <Image src={CompanyTwo} />
        </div>
        <div className="slide">
          <Image src={CompanyThree} />
        </div>
        <div className="slide">
          <Image src={CompanyFour} />
        </div>
        <div className="slide">
          <Image src={CompanyFive} />
        </div>
        <div className="slide">
          <Image src={CompanySix} />
        </div>
        <div className="slide">
          <Image src={CompanySeven} />
        </div>
        {/* Duplicate slides */}
        <div className="slide">
          <Image src={CompanyOne} />
        </div>
        <div className="slide">
          <Image src={CompanyTwo} />
        </div>
        <div className="slide">
          <Image src={CompanyThree} />
        </div>
        <div className="slide">
          <Image src={CompanyFour} />
        </div>
        <div className="slide">
          <Image src={CompanyFive} />
        </div>
        <div className="slide">
          <Image src={CompanySix} />
        </div>
        <div className="slide">
          <Image src={CompanySeven} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
