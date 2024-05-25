import React from "react";
import UI1 from "../../../public/images/UI_KIT/UI1.png";
import Image from "next/image";
import me from "../../../public/images/UI_KIT/me.png";

export default function ExploreUIKitsCard() {
  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <Image src={UI1} className="w-full max-h-[335px] h-full object-cover" />
      <div className="p-4 bg-white flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h4 className="text-gray900 text-[20px] leading-[30px] font-rocGroteskMid">
            Dailyflow | Task Management | UI Kit
          </h4>
          <span className="text-orange text-[22px] leading-[32px] font-rocGroteskMid">
            $59
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={me} />
          <div className="flex items-center gap-1">
            <span className="text-sm font-rocGroteskMid leading-5 text-gray600">
              Md manjurul islam
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M6 12.5L10 8.5L6 4.5"
                  stroke="#5D6679"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm font-rocGroteskMid leading-5 text-gray600">
              UI Kits
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
