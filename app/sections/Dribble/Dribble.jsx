import ContinuesSlider from "@/app/components/ContinuesSlider/ContineousSlider";
import React from "react";
import companyOne from "../../../public/company/1.png";
import companyTwo from "../../../public/company/2.png";
import companyThree from "../../../public/company/3.png";

export default function Dribble() {
  const sliderOne = [
    companyOne,
    companyTwo,
    companyThree,
    companyOne,
    companyTwo,
    companyThree,
    companyOne,
    companyTwo,
    companyThree,
  ];
  const sliderTwo = [
    companyOne,
    companyTwo,
    companyThree,
    companyOne,
    companyTwo,
    companyThree,
    companyOne,
    companyTwo,
    companyThree,
  ];
  const sliderThree = [
    companyOne,
    companyTwo,
    companyThree,
    companyOne,
    companyTwo,
    companyThree,
    companyOne,
    companyTwo,
    companyThree,
  ];

  return (
    <div>
      <ContinuesSlider
        width={280}
        height={380}
        reverse={false}
        contents={sliderOne}
        prefix="dribbleShotsOne"
        animationDuration={30}
      />
      <ContinuesSlider
        width={280}
        height={380}
        reverse={true}
        contents={sliderTwo}
        prefix="dribbleShotsTwo"
        animationDuration={30}
      />
      <ContinuesSlider
        width={280}
        height={380}
        reverse={false}
        contents={sliderThree}
        prefix="dribbleShotsThree"
        animationDuration={30}
      />
    </div>
  );
}
