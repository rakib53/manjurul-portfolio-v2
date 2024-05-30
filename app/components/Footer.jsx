import { CheckMarkIcon, CopyTextIcon, SocialLinkIcon } from "@utils/SVG";
import React from "react";
import ClickToCopy from "./ClickToCopy";

export default function Footer() {
  return (
    <section className="bg-dark p-7">
      <div className="p-7 bg-orange rounded-3xl">
        <h2 className="text-[140px] leading-[150px] text-dark tracking-[-1%] py-7 text-center font-rocGroteskBold uppercase">
          let’s make your dream product together.
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-full bg-white rounded-2xl flex justify-center items-center py-9 gap-[10px]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1237_202)">
                    <path
                      d="M18.2057 15.4648L17.8392 17.0541C17.7642 17.3784 17.4757 17.6077 17.1428 17.6077H2.85728C2.52443 17.6077 2.23586 17.3784 2.16086 17.0541L1.79443 15.4648H18.2057Z"
                      fill="#FA6444"
                    />
                    <path
                      d="M19.982 7.76881L18.5356 14.0366H1.4644L0.0179852 7.76881C-0.0455854 7.49239 0.0601276 7.20382 0.287982 7.03454C0.516551 6.86525 0.822976 6.8474 1.06869 6.98811L5.48935 9.51451L9.40502 3.641C9.53288 3.44958 9.7443 3.33101 9.97359 3.32244C10.205 3.31244 10.4229 3.41672 10.5636 3.59815L15.1557 9.50237L18.8892 7.01382C19.1328 6.8524 19.4506 6.85382 19.6913 7.02025C19.9328 7.18668 20.047 7.48382 19.982 7.76881Z"
                      fill="#FA6444"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1237_202">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.464844)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-dark2 text-lg leading-7 font-medium">
                My Portfolio
              </span>
            </div>
            <div className="w-full bg-white rounded-2xl flex justify-center items-center py-9 gap-[10px]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M18 8.79801H3M13.8333 2.13135V5.46468M7.16667 2.13135V5.46468M7 18.798H14C15.4001 18.798 16.1002 18.798 16.635 18.5255C17.1054 18.2858 17.4878 17.9034 17.7275 17.433C18 16.8982 18 16.1981 18 14.798V7.79801C18 6.39788 18 5.69782 17.7275 5.16304C17.4878 4.69263 17.1054 4.31018 16.635 4.0705C16.1002 3.79801 15.4001 3.79801 14 3.79801H7C5.59987 3.79801 4.8998 3.79801 4.36502 4.0705C3.89462 4.31018 3.51217 4.69263 3.27248 5.16304C3 5.69782 3 6.39788 3 7.79801V14.798C3 16.1981 3 16.8982 3.27248 17.433C3.51217 17.9034 3.89462 18.2858 4.36502 18.5255C4.8998 18.798 5.59987 18.798 7 18.798Z"
                    stroke="#FA6444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-dark2 text-lg leading-7 font-medium">
                Schedule a meeting
              </span>
            </div>
          </div>

          <div className="flex justify-between w-full bg-white rounded-2xl py-8 px-11">
            <h3 className="text-[60px] leading-[72px] font-bold text-dark2 font-rocGrotesk">
              hellomanjurul@gmail.com
            </h3>

            <ClickToCopy
              text="hellomanjurul@gmail.com"
              className="text-dark2 flex items-center gap-[10px] bg-secondaryWhite py-4 px-6 rounded-lg"
              icon={CopyTextIcon}
              label="Copy"
              afterCopyIcon={CheckMarkIcon}
              afterCopyLabel="Copied gmail!"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6">
        <div>
          <span>©2024 Md Manjurul Islam all right reserved</span>
        </div>
        <div>
          <ul className="flex gap-3 items-center">
            <li>
              <a href="" className="flex items-center gap-[5px]">
                <span>Behance</span>
                <span>{SocialLinkIcon}</span>
              </a>
            </li>
            <li className="max-w-[10px] max-h-[10px] min-w-[10px] min-h-[10px] w-full h-full block rounded-full bg-gray"></li>
            <li>
              <a href="" className="flex items-center gap-[5px]">
                <span>Dribbble</span>
                <span>{SocialLinkIcon}</span>
              </a>
            </li>
            <li className="max-w-[10px] max-h-[10px] min-w-[10px] min-h-[10px] w-full h-full block rounded-full bg-gray"></li>
            <li>
              <a href="" className="flex items-center gap-[5px]">
                <span>Linkedin</span>
                <span>{SocialLinkIcon}</span>
              </a>
            </li>
            <li className="max-w-[10px] max-h-[10px] min-w-[10px] min-h-[10px] w-full h-full block rounded-full bg-gray"></li>
            <li>
              <a href="" className="flex items-center gap-[5px]">
                <span>Medium</span>
                <span>{SocialLinkIcon}</span>
              </a>
            </li>
            <li className="max-w-[10px] max-h-[10px] min-w-[10px] min-h-[10px] w-full h-full block rounded-full bg-gray"></li>
            <li>
              <a href="" className="flex items-center gap-[5px]">
                <span>Figma</span>
                <span>{SocialLinkIcon}</span>
              </a>
            </li>
            <li className="max-w-[10px] max-h-[10px] min-w-[10px] min-h-[10px] w-full h-full block rounded-full bg-gray"></li>
            <li>
              <a href="" className="flex items-center gap-[5px]">
                <span>Instagram</span>
                <span>{SocialLinkIcon}</span>
              </a>
            </li>
            <li className="max-w-[10px] max-h-[10px] min-w-[10px] min-h-[10px] w-full h-full block rounded-full bg-gray"></li>
            <li>
              <a href="" className="flex items-center gap-[5px]">
                <span>Twitter</span>
                <span>{SocialLinkIcon}</span>
              </a>
            </li>
            <li className="max-w-[10px] max-h-[10px] min-w-[10px] min-h-[10px] w-full h-full block rounded-full bg-gray"></li>
            <li>
              <a href="" className="flex items-center gap-[5px]">
                <span>Facebook</span>
                <span>{SocialLinkIcon}</span>
              </a>
            </li>
            <li className="max-w-[10px] max-h-[10px] min-w-[10px] min-h-[10px] w-full h-full block rounded-full bg-gray"></li>
            <li>
              <a href="" className="flex items-center gap-[5px]">
                <span>Quora</span>
                <span>{SocialLinkIcon}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
