// src/HeroSection.jsx
import React from "react";
import ClinetOne from "../../../public/hero/1.png";
import Image from "next/image";
import Button from "@/app/components/Button";
import {
  heroSectionStarIcon,
  heroSmallSectionStarIcon,
  orangePlayIcon,
  orangeRightArrow,
  resumeIcon,
} from "@/utils/SVG";
import Container from "@/app/components/Container";

const HeroSection = () => {
  return (
    <section className="bg-[#A6DEF7] py-[110px] flex flex-col items-center text-center">
      <Container>
        <div className="relative flex justify-center items-center mb-8">
          <span className="absolute top-[50%] left-0">
            {heroSectionStarIcon}
          </span>
          <span className="absolute top-[50%] right-0">
            {heroSectionStarIcon}
          </span>
          <span className="absolute top-0 right-10">
            {heroSmallSectionStarIcon}
          </span>
          <span className="absolute bottom-0 top-auto left-10">
            {heroSmallSectionStarIcon}
          </span>
          <div className="relative h-[200px]">
            <Image
              src={ClinetOne}
              alt="Person 1"
              className="w-16 h-16 rounded-full absolute -top-8 -left-8"
            />
            <Image
              src={ClinetOne}
              alt="Person 2"
              className="w-16 h-16 rounded-full absolute top-8 -left-12"
            />
            <Image
              src={ClinetOne}
              alt="Person 3"
              className="w-24 h-24 rounded-full absolute bottom-0"
            />
            <Image
              src={ClinetOne}
              alt="Person 4"
              className="w-16 h-16 rounded-full absolute top-8 left-12"
            />
            <Image
              src={ClinetOne}
              alt="Person 5"
              className="w-16 h-16 rounded-full absolute -top-8 -right-8"
            />
          </div>
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
            className="orange_btn flex items-center gap-[10px] py-2 px-4"
            icon={orangeRightArrow}
            iconPosition="right"
          />
          <Button
            label="Show reels"
            labelClass="text-gray800"
            className="white_btn flex items-center gap-[10px] py-2 px-4"
            icon={orangePlayIcon}
            iconPosition="right"
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
