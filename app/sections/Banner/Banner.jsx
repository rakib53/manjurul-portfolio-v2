import React from "react";
import Container from "@components/Container";
import Navbar from "@components/Navbar";
import Button from "@components/Button";
import manjurul from "@public/banner/manjurul.png";
import Image from "next/image";
import Upwork from "@public/upwork.png";
import invisible from "@public/invisible.png";
import SocialButton from "@components/SocialButton";
import {
  behance,
  dribble,
  medium,
  orangePlayIcon,
  whiteRightArrow,
} from "@/utils/SVG";

export default function Banner() {
  return (
    <header className="w-full py-[25px] bg-white bg-[url('/bg.png')] bg-cover bg-center">
      <Navbar />
      <Container>
        <div className="w-full flex justify-between items-center py-[100px]">
          <div className="w-1/2">
            <div className="flex flex-col gap-6">
              <h4 className="text-[24px] uppercase tracking-[-0.48px] text-gray900 font-rocGroteskMid leading-none">
                Hello👋, I’m a{" "}
                <span className="font-rocGroteskBold bg-[#FFE782] border-[1.5px] border-[#F0F1F3] rounded-[38px] py-2 px-3">
                  UI/UX Designer
                </span>{" "}
                &
              </h4>
              <p className="text-[48px] leading-[64px] tracking-[-1.44px] text-gray900 font-rocGroteskBold">
                helps to Create Scalable SaaS Web Applications with design
                system.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Button
                label="Book a call"
                className="orange_btn flex items-center justify-between gap-[10px] py-2 px-4"
                icon={whiteRightArrow}
                iconPosition="right"
              />
              <Button
                label="Show reels"
                labelClass="text-dark"
                className="white_btn flex items-center justify-between gap-[10px] py-2 px-4"
                icon={orangePlayIcon}
                iconPosition="right"
              />
            </div>
            <div className="flex items-center gap-2 py-10">
              <SocialButton
                label="Behance"
                icon={behance}
                className="flex items-center gap-[10px]"
                hoverClass="w-fit behanceBtn cursor-pointer"
                labelClass="text-white text-lg leading-[28px]"
              />
              <SocialButton
                label="Dribble"
                icon={dribble}
                className="flex items-center gap-[10px]"
                hoverClass="w-fit dribbleBtn cursor-pointer"
                labelClass="text-white text-lg leading-[28px]"
              />
              <SocialButton
                label="Linkedin"
                icon={behance}
                className="flex items-center gap-[10px]"
                hoverClass="!w-fit linkedinBtn cursor-pointer"
                labelClass="text-white text-lg leading-[28px]"
              />
              <SocialButton
                label="Medium"
                icon={medium}
                className="flex items-center gap-[10px]"
                hoverClass="!w-fit mediumBtn cursor-pointer"
                labelClass="text-white text-lg leading-[28px]"
              />
            </div>
          </div>

          <div className="relative">
            <Image src={manjurul} width={500} height={500} />
            <div
              className="absolute right-[-100px] top-[80px] flex items-center gap-3 bg-white rounded-[500px] py-2 px-3"
              style={{
                boxShadow: "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
              }}
            >
              <Image src={invisible} />
              <span className="text-[13.5px] leading-5 font-rocGroteskMid text-gray800">
                UI/UX Designer at <br /> @Invisible studio
              </span>
            </div>

            <div
              className="absolute left-[-100px] bottom-[80px] flex items-center gap-3 bg-white rounded-[500px] py-2 px-3"
              style={{
                boxShadow: "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
              }}
            >
              <Image src={Upwork} />
              <span className="text-[20px] leading-[32px] font-rocGroteskMid text-gray800">
                Top rated seller <br /> at @upwork
              </span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
