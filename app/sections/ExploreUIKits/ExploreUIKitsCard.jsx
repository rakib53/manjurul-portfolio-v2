import React from "react";
import UI1 from "../../../public/images/UI_KIT/UI1.png";
import Image from "next/image";
import me from "../../../public/images/UI_KIT/me.png";
import Link from "next/link";

export default function ExploreUIKitsCard({ link, thumbnail }) {
  return (
    <Link
      href={link || ""}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-fit cursor-pointer"
    >
      <div className="max-h-[445px] h-full rounded-t-[16px] overflow-hidden">
        <Image
          src={thumbnail}
          width="100%"
          height="100%"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 bg-white h-auto flex flex-col gap-2 rounded-b-[16px]">
        <div className="flex justify-between items-center">
          <h4 className="text-gray900 text-[20px] leading-[30px] font-rocGroteskMid hover:text-orange">
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
    </Link>
  );
}
