import companyOne from "@public/companies/1.png";
import companyTen from "@public/companies/10.png";
import companyEleven from "@public/companies/11.png";
import companyTwo from "@public/companies/2.png";
import companyThree from "@public/companies/3.png";
import companyFour from "@public/companies/4.png";
import companyFive from "@public/companies/5.png";
import companySix from "@public/companies/6.png";
import companySeven from "@public/companies/7.png";
import companyEight from "@public/companies/8.png";
import companyNine from "@public/companies/9.png";
import MarqueeSlider from "app/components/MarqueeSlider/MarqueeSlider";

export default function Companies() {
  const companies = [
    companyOne,
    companyTwo,
    companyThree,
    companyFour,
    companyFive,
    companySix,
    companySeven,
    companyEight,
    companyNine,
    companyTen,
    companyEleven,
  ];
  return (
    <div className="">
      {/* companies-side-shadow */}
      {/* <p className="text-center text-base leading-[23px] tracking-[3%] font-rocGroteskMid uppercase pt-[24px]">
        Companies that I helped to grow
      </p> */}
      <MarqueeSlider
        width={280}
        gap={20}
        padding={20}
        reverse={false}
        contents={companies}
        prefix="companies"
        animationDuration={30}
        className="pt-[40px] pb-[50px]"
      />
    </div>
  );
}
