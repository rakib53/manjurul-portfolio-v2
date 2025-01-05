import peoples from "@public/peoples.png";
import { orangePlayIcon, orangeRightArrow } from "@utils/SVG";
import Button from "app/components/Button";
import Image from "next/image";

const Partnership = () => {
  return (
    <section className="w-full px-6 flex flex-col items-center text-center">
      {/* <div className="w-full relative"> */}
      {/* <div>
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
        </div> */}
      <div className="partnership py-[120px]">
        <div className="w-full flex justify-center mb-20">
          <Image src={peoples} alt="" />
        </div>
        <div>
          <h3 className="sectionTitle">
            Partnered with leading innovators & drive business growth.
          </h3>
          <p className="sectionDesc !text-gray700">
            Discover how we can transform your vision into impactful
            solutions—let’s make it happen together!
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

      {/* </div> */}
    </section>
  );
};

export default Partnership;
