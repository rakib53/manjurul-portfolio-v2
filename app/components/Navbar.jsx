import { noteIcon } from "@utils/SVG";
import Link from "next/link";
import Button from "./Button";
import Container from "./Container";

export default function Navbar() {
  return (
    <div className="w-full">
      <Container>
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col text-gray800 text-lg leading-7 tracking-[0.305px] font-rocGroteskBold">
            <span className="">Md Manjurul Islam</span>
          </div>

          <ul className="flex items-center gap-[30px]">
            <li className="bg-white py-2 px-4 rounded-md">
              <Link
                href="#portfolio"
                className="text-sm text-gray600 opacity-85 font-rocGroteskMid tracking-[ 0.56px]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="my-story"
                className="text-sm text-gray600 opacity-85 font-rocGroteskMid tracking-[ 0.56px]"
              >
                My story
              </Link>
            </li>
          </ul>

          <div className="flex items-center">
            <Button
              label="Contact me"
              link="https://drive.google.com/file/d/19mzhsmOTDttj0kBzWfMW4aHLupHPfGv3/view?usp=sharing"
              linkTarget="_blank"
              className="gray_btn flex items-center justify-between gap-[10px] py-2 px-4 font-rocGroteskMid"
              icon={noteIcon}
              iconPosition="left"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
