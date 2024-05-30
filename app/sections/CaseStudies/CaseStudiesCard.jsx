import React from "react";
import CaseStudies1 from "@public/images/CASE_STUDIES/1.png";
import Button from "@components/Button";
import { eyeIcon } from "@utils/SVG";
import Image from "next/image";

export default function CaseStudiesCard({ cardNumber }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <Image
        src={CaseStudies1}
        className="w-full max-h-[335px] h-full object-cover"
      />
      <div className="p-6 pr-4 bg-white flex justify-between gap-[100px]">
        <h2 className="text-[50px] leading-[60px] text-gray100 font-rocGroteskMid">
          {cardNumber}
        </h2>
        <div className="flex flex-col gap-5 items-center">
          <h3 className="text-[20px] leading-8 text-gray900 font-rocGroteskBold">
            A SaaS plartform for seamless coding for programmers
          </h3>
          <hr className="w-full border-[0.83px] border-[#E3E5E8]" />
          <div className="w-full flex !justify-between gap-2">
            <Button
              label="Read case study"
              labelClass="flex justify-center"
              className="w-full orange_btn flex items-center justify-between gap-[10px] py-2 px-4"
            />
            <Button
              label="Live preview"
              labelClass="text-dark"
              className="w-full white_btn flex items-center justify-center gap-[10px] py-2 px-4"
              icon={eyeIcon}
              iconPosition="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
