// src/Slider.js
import React from "react";
import styles from "./Slider.module.css";
// import CompanyOne from "../../../public/dribbleshots/db1.png";
// import CompanyTwo from "../../../public/dribbleshots/db2.png";
// import CompanyThree from "../../../public/dribbleshots/db3.png";
import CompanyOne from "../../../public/company/1.png";
import CompanyTwo from "../../../public/company/2.png";
import CompanyThree from "../../../public/company/3.png";
import Image from "next/image";

const DribbleShotsSlider = (props) => {
  const {} = props;
  let width = 272;
  let height = 300;
  let prefix = "dribbleShots";
  let reverse = true;
  let animationDuration = 10;
  let contents = 7;
  return (
    <div className={`slider${prefix}`}>
      <style>
        {`
            .slider${prefix}{
              width: 100%;
              height: ${height}px;
              overflow: hidden;
              position: relative;
              background-color: #2b2f38;
            }

            .slideTrack${prefix}{
                display: flex;
                width: calc(${width}px * ${contents * 2});
                animation: scroll${prefix} ${contents * 2}s linear infinite;
            }

            .slide${prefix}{
              width: ${width}px;
              height: ${height}px;
              line-height: 100px;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #2b2f38;
              box-sizing: border-box;
              flex-shrink: 0;
              border: 1px solid black;
            }
            
            @keyframes scroll${prefix} {
              0% {
                transform: ${
                  reverse
                    ? `translateX(calc(-${width}px * ${contents}))`
                    : "translateX(0)"
                } 
              }
              100% {
                transform: ${
                  reverse
                    ? "translateX(0)"
                    : `translateX(calc(-${width}px * ${contents}))`
                }
              }
            }
            
        `}
      </style>
      <div className={`slideTrack${prefix}`}>
        <div className={`slide${prefix}`}>
          <Image src={CompanyOne} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyTwo} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyThree} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyOne} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyTwo} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyThree} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyTwo} />
        </div>
        {/* Duplicate slides */}
        <div className={`slide${prefix}`}>
          <Image src={CompanyOne} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyTwo} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyThree} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyOne} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyTwo} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyThree} />
        </div>
        <div className={`slide${prefix}`}>
          <Image src={CompanyTwo} />
        </div>
      </div>
    </div>
  );
};

export default DribbleShotsSlider;
