import Link from "next/link";

export default function ExploreMoreBtn({ link, target }) {
  return (
    <Link
      href={link}
      target={target}
      className="text-[#00432B] text-lg font-rocGroteskMid leading-7 tracking-[-0.72px] flex items-center py-2 px-4 bg-transparent border border-[#00432B] rounded-md group transition-all duration-300 explore_btn hover:border-transparent"
    >
      <span>Explore more</span>
      <span className="max-w-0 opacity-0 group-hover:max-w-[1.5em] group-hover:opacity-100 group-hover:ml-2 overflow-hidden transition-all duration-300 ease-in-out">
        <svg
          stroke="#00432B"
          fill="#00432B"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </span>
    </Link>
  );
}
