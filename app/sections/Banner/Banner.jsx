import inline_image from "@public/inline_image.png";
import { behance, dribble, linkedin } from "@utils/SVG";
import SocialButton from "app/components/SocialButton";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <header className="w-full max-w-[1440px] mx-auto">
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
              <span className="max-w-[1.5em] opacity-100 group-hover:max-w-0 group-hover:opacity-0 transition-all duration-300">
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
              <span>Book a call</span>
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
              <span>My resume</span>
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
            <SocialButton
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
            />
          </div>
        </div>
      </div>
    </header>
  );
}
