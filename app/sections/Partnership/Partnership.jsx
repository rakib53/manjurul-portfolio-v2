import React from "react";
import Image from "next/image";
import peoples from "@public/peoples.png";
import Button from "@components/Button";
import Container from "@components/Container";
import {
  heroSectionStarIcon,
  heroSmallSectionStarIcon,
  orangePlayIcon,
  orangeRightArrow,
} from "@utils/SVG";

const Partnership = () => {
  return (
    <section className="bg-[#A6DEF7] py-[110px] flex flex-col items-center text-center">
      <Container>
        <div className="w-full relative">
          <div>
            <span className="absolute w-full top-[50%] left-0">
              {heroSectionStarIcon}
            </span>
            <span className="absolute top-[50%] right-0">
              {heroSectionStarIcon}
            </span>
            <span className="absolute top-0 right-[100px]">
              {heroSmallSectionStarIcon}
            </span>
            <span className="absolute bottom-[-40px] top-auto left-[200px]">
              {heroSmallSectionStarIcon}
            </span>
          </div>
          <div className="w-full flex justify-center mb-20">
            <Image src={peoples} />
          </div>
          <div>
            <h3 className="sectionTitle">
              Partnering with Top <br /> Innovators to Transform Ideas into
              Reality.
            </h3>
            <p className="sectionDesc !text-gray700">
              Explore My Portfolio to Witness My Track Record of Excellence.
            </p>
          </div>
          <div className="flex justify-center space-x-4 pt-[40px]">
            <Button
              label="Book a call"
              link="https://cal.com/manjurul"
              linkTarget="_blank"
              className="orange_btn flex items-center gap-[10px] py-2 px-4"
              icon={orangeRightArrow}
              iconPosition="right"
            />
            <Button
              label="Show reels"
              link="https://www.youtube.com/watch?v=Pu_71gLGegk"
              linkTarget="_blank"
              labelClass="text-gray800"
              className="white_btn flex items-center gap-[10px] py-2 px-4"
              icon={orangePlayIcon}
              iconPosition="right"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partnership;
