import React from "react";
import Image from "next/image";

const ContinuesSlider = (props) => {
  const { width, height, prefix, reverse, animationDuration, contents } = props;

  console.log(contents);

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
                animation: scroll${prefix} ${animationDuration}s linear infinite;
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
        {contents?.map((c, index) => {
          <div className={`slide${prefix}`} key={index}>
            {/* <Image src={c?.src} alt="" /> */}
            <span className="bg-red-200"></span>
          </div>;
        })}
        {/* Duplicate slides */}
        {contents?.map((c, index) => {
          <div className={`slide${prefix}`} key={index}>
            {/* <Image src={c?.src} alt="" /> */}
            <span className="bg-red-200"></span>
          </div>;
        })}
      </div>
    </div>
  );
};

export default ContinuesSlider;

// <div className={`slideTrack${prefix}`}>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyOne} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyTwo} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyThree} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyOne} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyTwo} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyThree} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyTwo} />
// </div>
// {/* Duplicate slides */}
// <div className={`slide${prefix}`}>
//   <Image src={CompanyOne} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyTwo} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyThree} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyOne} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyTwo} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyThree} />
// </div>
// <div className={`slide${prefix}`}>
//   <Image src={CompanyTwo} />
// </div>
// </div>