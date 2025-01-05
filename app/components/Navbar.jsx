import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full py-5 px-6">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col text-gray800 text-lg leading-7 tracking-[0.305px] font-rocGroteskBold">
          <span className="">Md Manjurul Islam</span>
        </div>

        <ul className="flex items-center gap-[30px]">
          <li className="bg-white py-2 px-4 rounded-md">
            <Link
              href="/"
              className="text-sm text-[#101828] opacity-85 font-rocGroteskMid tracking-[ 0.56px]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="my-story"
              className="text-sm text-[#7C7C7C] opacity-85 font-rocGroteskMid tracking-[ 0.56px]"
            >
              My story
            </Link>
          </li>
        </ul>

        <div className="flex items-center">
          <a href="" className="flex items-center gap-2">
            <span className="text-[#7C7C7C] font-rocGroteskMid text-sm tracking-[-0.28px]">
              Contact me
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <rect
                  x="0.494995"
                  y="0.5"
                  width="29.505"
                  height="29.505"
                  rx="14.7525"
                  fill="#00432B"
                />
                <path
                  d="M9.91418 15.2524H20.5809M20.5809 15.2524L16.5809 11.2524M20.5809 15.2524L16.5809 19.2524"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
