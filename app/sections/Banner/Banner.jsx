import React from "react";
import Container from "@/app/components/Container";
import Navbar from "@/app/components/Navbar";
import Button from "@/app/components/Button";
import { orangePlayIcon, whiteRightArrow } from "@/utils/SVG";
import manjurul from "../../../public/manjurul.png";
import Image from "next/image";

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
          </div>

          <div>
            <Image src={manjurul} width={500} height={500} />
          </div>
        </div>
      </Container>
    </header>
  );
}
