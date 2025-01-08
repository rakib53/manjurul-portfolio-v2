import inline_image from "@public/inline_image.png";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <header className="w-full max-w-[1440px] px-6 mx-auto">
      <div className="w-full flex justify-between items-center pt-[100px] bg-[url('/header.png')] bg-cover bg-center rounded-xl">
        <div className="w-full flex flex-col items-center gap-6">
          {/* Hey, Dream Chaser! 🚀 */}
          <div className="flex justify-center">
            <span className="inline-block py-[18px] px-[25px] text-center bg-[#173E34] rounded-full font-rocGroteskMid text-xl tracking-[-0.4px]">
              Hey, Dream Chaser! 🚀
            </span>
          </div>

          {/* Content  */}
          <div className="flex flex-col">
            <h1 className="text-[#F7F6EF] tracking-[-2.7px] font-rocGroteskReg text-[54px] text-center">
              I’m
              <Image
                src={inline_image}
                className="w-[56px] h-[56px] inline-block mx-3 rounded-full"
                alt="manjurul islam"
              />
              <strong className="text-[#B9F49B] font-rocGroteskBold">
                Manjurul Islam
              </strong>{" "}
              <br />A curious, logical & perfectionist <br />
              <strong className="text-[#B9F49B] font-rocGroteskBold">
                Product Designer
              </strong>{" "}
              From Bangladesh.
            </h1>
            <p className="text-[21px] text-center leading-[64px] tracking-[-0.655px] font-rocGroteskReg text-[#FFFFFFB2]">
              I design scalable digital products for efficient business growth.
            </p>
          </div>

          {/* Button  */}
          <div className="flex items-center gap-4 mt-6 pb-[110px]">
            <Link
              href="https://cal.com/manjurul"
              target="_"
              className="w-[160px] flex items-center justify-between py-2 px-4 bg-[#F7F6EF] border border-[#B9F49B] rounded-md text-[#00432B] text-lg group transition-all duration-300 font-rocGroteskMid book_a_call_white"
            >
              <span className="flex items-center max-w-[1.5em] opacity-100 group-hover:max-w-0 group-hover:opacity-0 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M18 8.68644H3M13.8333 2.01978V5.35311M7.16667 2.01978V5.35311M9.25 12.0198L10.5 11.1864V15.3531M9.45833 15.3531H11.5417M7 18.6864H14C15.4001 18.6864 16.1002 18.6864 16.635 18.414C17.1054 18.1743 17.4878 17.7918 17.7275 17.3214C18 16.7866 18 16.0866 18 14.6864V7.68644C18 6.28631 18 5.58625 17.7275 5.05147C17.4878 4.58106 17.1054 4.19861 16.635 3.95893C16.1002 3.68644 15.4001 3.68644 14 3.68644H7C5.59987 3.68644 4.8998 3.68644 4.36502 3.95893C3.89462 4.19861 3.51217 4.58106 3.27248 5.05147C3 5.58625 3 6.28631 3 7.68644V14.6864C3 16.0866 3 16.7866 3.27248 17.3214C3.51217 17.7918 3.89462 18.1743 4.36502 18.414C4.8998 18.6864 5.59987 18.6864 7 18.6864Z"
                    stroke="#00432B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="flex items-center pt-1">Book a call</span>
              <span className="max-w-0 opacity-0 group-hover:max-w-[1.5em] group-hover:opacity-100 transition-all duration-300">
                <svg
                  stroke="#00432B"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>

            <Link
              href="https://drive.google.com/file/d/19mzhsmOTDttj0kBzWfMW4aHLupHPfGv3/view?usp=sharing"
              target="_"
              className="w-[160px] flex items-center justify-between py-2 px-4 bg-[#EDFDDE1A] hover:bg-[#D7FBBE] hover:text-[#00432B] border border-[#B9F49B] rounded-md text-[#B9F49B] text-lg group transition-all duration-300 font-rocGroteskMid my_resume"
            >
              <span className="max-w-[1.5em] opacity-100 group-hover:max-w-0 group-hover:opacity-0 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M10.9167 2.01978H13.1667C14.5668 2.01978 15.2669 2.01978 15.8016 2.29226C16.272 2.53194 16.6545 2.91439 16.8942 3.3848C17.1667 3.91958 17.1667 4.61964 17.1667 6.01978V14.6864C17.1667 16.0866 17.1667 16.7866 16.8942 17.3214C16.6545 17.7918 16.272 18.1743 15.8016 18.414C15.2669 18.6864 14.5668 18.6864 13.1667 18.6864H7.83333C6.4332 18.6864 5.73314 18.6864 5.19836 18.414C4.72795 18.1743 4.3455 17.7918 4.10582 17.3214C3.83333 16.7866 3.83333 16.0866 3.83333 14.6864V14.1031M13.8333 11.1864H10.0833M13.8333 7.85311H10.9167M13.8333 14.5198H7.16667M5.5 8.68644V4.10311C5.5 3.41275 6.05964 2.85311 6.75 2.85311C7.44036 2.85311 8 3.41275 8 4.10311V8.68644C8 10.0672 6.88071 11.1864 5.5 11.1864C4.11929 11.1864 3 10.0672 3 8.68644V5.35311"
                    stroke="#B9F49B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="flex items-center pt-1">My resume</span>
              <span className="max-w-0 opacity-0 group-hover:max-w-[1.5em] group-hover:opacity-100 transition-all duration-300">
                <svg
                  stroke="#00432B"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2 py-7">
            {/* <SocialButton
              href="https://www.behance.net/manjuruldesign"
              label="Behance"
              icon={behance}
              className="flex items-center gap-[10px]"
              hoverClass="!w-auto behanceBtn cursor-pointer"
              labelClass="text-white text-lg leading-[28px]"
            />
            <SocialButton
              href="https://www.linkedin.com/in/manjuruldesign/"
              label="Linkedin"
              icon={linkedin}
              className="flex items-center gap-[10px]"
              hoverClass="!w-auto linkedinBtn cursor-pointer"
              labelClass="text-white text-lg leading-[28px]"
            />
            <SocialButton
              href="https://dribbble.com/manjuruldesign"
              label="Dribble"
              icon={dribble}
              className="flex items-center gap-[10px]"
              hoverClass="!w-auto dribbleBtn cursor-pointer"
              labelClass="text-white text-lg leading-[28px]"
            /> */}

            {/* Behance link  */}
            <Link
              href="https://www.behance.net/manjuruldesign"
              target="_"
              className="p-3 socialBtn behanceBtn"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 12"
                  fill="none"
                >
                  <path
                    d="M16.4998 1.6H11.2499V0H16.4998V1.6ZM17.7943 9.6C17.4628 10.6376 16.2726 12 13.9686 12C11.6631 12 9.79564 10.6168 9.79564 7.46C9.79564 4.332 11.5394 2.724 13.8951 2.724C16.2066 2.724 17.6181 4.1496 17.9263 6.2648C17.9848 6.6696 18.0081 7.2152 17.9976 7.9768H11.9774C12.0749 10.5456 14.5896 10.6264 15.4183 9.6H17.7943ZM12.0299 6.4H15.7536C15.6748 5.1624 14.9016 4.6248 13.8959 4.6248C12.7964 4.6248 12.1881 5.2392 12.0299 6.4ZM4.84945 11.9904H0V0.0167999H5.21469C9.32165 0.0815999 9.39965 4.372 7.25467 5.5416C9.85039 6.5496 9.93739 11.9904 4.84945 11.9904ZM2.24998 4.8H4.93795C6.81893 4.8 7.11742 2.4 4.70395 2.4H2.24998V4.8ZM4.7932 7.2H2.24998V9.6128H4.7557C7.04692 9.6128 6.90668 7.2 4.7932 7.2Z"
                    fill="#2B2F38"
                  />
                </svg>
              </span>
            </Link>

            {/* Linkedin  */}
            <Link
              href="https://www.linkedin.com/in/manjuruldesign/"
              target="_"
              className="p-3 socialBtn linkedinBtn"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.9432 7.5752H10.9144V9.0552C11.3424 8.204 12.44 7.4392 14.0888 7.4392C17.2496 7.4392 18 9.1336 18 12.2424V18H14.8V12.9504C14.8 11.18 14.372 10.1816 13.2824 10.1816C11.7712 10.1816 11.1432 11.2576 11.1432 12.9496V18H7.9432V7.5752ZM2.456 17.864H5.656V7.4392H2.456V17.864ZM6.1144 4.04C6.11452 4.30822 6.06132 4.57379 5.95791 4.82127C5.85449 5.06875 5.70292 5.29321 5.512 5.4816C5.12512 5.8661 4.60145 6.08132 4.056 6.08C3.51151 6.07963 2.98905 5.86496 2.6016 5.4824C2.41137 5.29337 2.26031 5.06866 2.15707 4.82115C2.05384 4.57363 2.00046 4.30818 2 4.04C2 3.4984 2.216 2.98 2.6024 2.5976C2.98951 2.21453 3.51219 1.99976 4.0568 2C4.6024 2 5.1256 2.2152 5.512 2.5976C5.8976 2.98 6.1144 3.4984 6.1144 4.04Z"
                    fill="#2B2F38"
                  />
                </svg>
              </span>
            </Link>

            {/* Dribble link  */}
            <Link
              href="https://dribbble.com/manjuruldesign"
              target="_"
              className="p-3 socialBtn dribbleBtn hover:!text-white"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 1C5.03125 1 1 5.03125 1 10C1 14.9688 5.03125 19 10 19C14.959 19 19 14.9688 19 10C19 5.03125 14.959 1 10 1ZM15.9445 5.14825C17.0526 6.49775 17.6658 8.18567 17.6823 9.93175C17.4287 9.883 14.8907 9.3655 12.3333 9.688C12.274 9.5605 12.2253 9.424 12.1667 9.2875C12.0077 8.91205 11.8386 8.54092 11.6597 8.1745C14.4903 7.0225 15.7788 5.3635 15.9445 5.14825ZM10 2.32825C11.9522 2.32825 13.7388 3.0595 15.0955 4.26025C14.959 4.45525 13.7972 6.00775 11.0642 7.03225C9.80425 4.71925 8.40925 2.82475 8.194 2.53225C8.78599 2.39402 9.39209 2.3253 10 2.3275V2.32825ZM6.73 3.04975C6.93475 3.3235 8.30125 5.227 9.58 7.49125C5.9875 8.44825 2.815 8.42875 2.47375 8.42875C2.97175 6.04675 4.58275 4.06525 6.73 3.04975ZM2.308 10.0097V9.77575C2.64025 9.7855 6.3685 9.83425 10.2055 8.68225C10.4298 9.112 10.6345 9.55075 10.8295 9.99025C10.732 10.0195 10.6248 10.0487 10.5273 10.078C6.56425 11.3568 4.45525 14.851 4.27975 15.1442C3.01031 13.7354 2.30785 11.9062 2.308 10.0097ZM10 17.692C8.29151 17.6947 6.63148 17.1243 5.2855 16.072C5.422 15.7885 6.9835 12.7818 11.3177 11.269C11.3372 11.2593 11.3477 11.2593 11.3665 11.2495C12.4502 14.0507 12.889 16.4035 13.0068 17.077C12.079 17.4775 11.0642 17.692 10 17.692ZM14.2855 16.3743C14.2075 15.9055 13.7972 13.6607 12.7915 10.8977C15.2028 10.5175 17.311 11.1423 17.575 11.23C17.2428 13.3675 16.0128 15.2125 14.2855 16.3743Z"
                    fill="#2B2F38"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
