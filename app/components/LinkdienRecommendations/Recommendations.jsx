import React from "react";
import Image from "next/image";
import { QuoteIcon } from "@utils/SVG";
import LinkedIn from "@public/LinkedIn.png";
import linkdienClient from "@public/linkdienClient.png";

export default function Recommendations() {
  return (
    <div className="p-10 rounded-3xl flex flex-col gap-[50px] bg-white">
      <div>
        <span>{QuoteIcon}</span>
      </div>
      <div>
        <p className="text-lg leading-7 text-gray800 font-rocGroteskReg">
          Manjurul is an excellent and really talented designer. The
          communication with him was flawless, and he nailed exactly what I
          wanted. The whole design was extremely complete, with all the details
          I could wish for. I'm looking forward to using all of these in my new
          business. I'd recommend Manjurul and I'm going to work for him in the
          future for sure.
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div>
            <Image src={linkdienClient} />
          </div>
          <div className="flex flex-col">
            <h4 className="m-0 p-0 text-xl leading-[30px] text-gray900 font-rocGroteskBold">
              Mohammad Rahman
            </h4>
            <span className="text-sm leading-5 font-rocGroteskReg text-gray600">
              Founder, Farisha Foods
            </span>
          </div>
        </div>
        <div>
          <span className="text-black font-rocGroteskBold uppercase text-xs">
            Reviewed In
          </span>
          <Image src={LinkedIn} />
        </div>
      </div>
    </div>
  );
}
