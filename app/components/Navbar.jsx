import React from "react";
import Container from "./Container";
import Button from "./Button";
import { bangladeshIcon, noteIcon } from "@/utils/SVG";

export default function Navbar() {
  return (
    <div className="w-full">
      <Container>
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col text-gray800 tracking-[0.305px] uppercase font-rocGroteskBold">
            <span>Manjurul</span>
            <div className="flex items-center gap-2">
              <span>Islam</span>
              <span>{bangladeshIcon}</span>
            </div>
          </div>

          <ul className="flex items-center gap-[30px]">
            <li>
              <a
                href=""
                className="text-sm text-gray600 opacity-85 font-rocGroteskMid uppercase tracking-[ 0.56px]"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm text-gray600 opacity-85 font-rocGroteskMid uppercase tracking-[ 0.56px]"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm text-gray600 opacity-85 font-rocGroteskMid uppercase tracking-[ 0.56px]"
              >
                Blogs
              </a>
            </li>
          </ul>

          <div className="flex items-center">
            <Button
              label="My resume"
              className="gray_btn flex items-center justify-between gap-[10px] py-2 px-4"
              icon={noteIcon}
              iconPosition="left"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
