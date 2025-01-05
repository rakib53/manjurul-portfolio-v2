import peoples from "@public/peoples.png";
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
            labelClass={"text-[#F7F6EF] text-lg"}
            className="flex items-center justify-between gap-[10px] py-2 px-4 bg-[#00432B] hover:bg-[#00411c] rounded-md"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M18 8.33342H3M13.8333 1.66675V5.00008M7.16667 1.66675V5.00008M9.25 11.6667L10.5 10.8334V15.0001M9.45833 15.0001H11.5417M7 18.3334H14C15.4001 18.3334 16.1002 18.3334 16.635 18.0609C17.1054 17.8212 17.4878 17.4388 17.7275 16.9684C18 16.4336 18 15.7335 18 14.3334V7.33342C18 5.93328 18 5.23322 17.7275 4.69844C17.4878 4.22803 17.1054 3.84558 16.635 3.6059C16.1002 3.33341 15.4001 3.33341 14 3.33341H7C5.59987 3.33341 4.8998 3.33341 4.36502 3.6059C3.89462 3.84558 3.51217 4.22803 3.27248 4.69844C3 5.23322 3 5.93328 3 7.33341V14.3334C3 15.7335 3 16.4336 3.27248 16.9684C3.51217 17.4388 3.89462 17.8212 4.36502 18.0609C4.8998 18.3334 5.59987 18.3334 7 18.3334Z"
                  stroke="#F7F6EF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            iconPosition="left"
          />
          <Button
            label="Project library"
            link="https://cal.com/manjurul"
            linkTarget="_blank"
            labelClass={"text-[#00432B] text-lg"}
            className="flex items-center justify-between gap-[10px] py-2 px-4 bg-[#F7F6EF] rounded-md"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M11.3333 1.66675L3.91121 10.5733C3.62054 10.9221 3.4752 11.0965 3.47298 11.2438C3.47105 11.3718 3.52811 11.4937 3.62771 11.5742C3.74229 11.6667 3.96931 11.6667 4.42336 11.6667H10.5L9.66667 18.3334L17.0888 9.42687C17.3795 9.07806 17.5248 8.90366 17.527 8.75636C17.5289 8.62832 17.4719 8.50649 17.3723 8.426C17.2577 8.33342 17.0307 8.33342 16.5766 8.33342H10.5L11.3333 1.66675Z"
                  stroke="#00432B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            iconPosition="left"
          />
        </div>
      </div>

      {/* </div> */}
    </section>
  );
};

export default Partnership;
