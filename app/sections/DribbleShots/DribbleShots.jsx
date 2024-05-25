import React from "react";
import companyOne from "@public/dribble_shots/db1.png";
import companyTwo from "@public/dribble_shots/db2.png";
import companyThree from "@public/dribble_shots/db3.png";
import MarqueeSlider from "@components/MarqueeSlider/MarqueeSlider";

export default function DribbleShots() {
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
    <section className="bg-white py-20">
      <div className="mb-[60px]">
        <h3 className="sectionTitle">Stay Inspired: Latest Shots on Dribble</h3>
        <p className="sectionDesc">
          Explore My Latest Design Innovations and Inspirations on Dribble.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <MarqueeSlider
          width={400}
          height={300}
          gap={24}
          reverse={false}
          contents={sliderOne}
          prefix="dribbleShotsOne"
          animationDuration={30}
        />
        <MarqueeSlider
          width={400}
          height={300}
          gap={24}
          reverse={true}
          contents={sliderTwo}
          prefix="dribbleShotsTwo"
          animationDuration={30}
        />
        <MarqueeSlider
          width={400}
          height={300}
          gap={24}
          reverse={false}
          contents={sliderThree}
          prefix="dribbleShotsThree"
          animationDuration={30}
        />
      </div>
    </section>
  );
}
