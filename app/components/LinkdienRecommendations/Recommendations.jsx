import LinkedIn from "@public/LinkedIn.png";
import { QuoteIcon } from "@utils/SVG";
import Image from "next/image";

export default function Recommendations(props) {
  const { description, name, company, title, profile } = props;

  console.log(profile);
  return (
    <div className="p-10 rounded-3xl flex flex-col gap-[50px] bg-white">
      <div>
        <span>{QuoteIcon}</span>
      </div>
      <div>
        <p className="text-left text-lg leading-7 text-gray800 font-rocGroteskReg">
          {description?.length > 300
            ? description?.slice(0, 220) + "..."
            : description}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[45px] h-[45px] rounded-full overflow-hidden bg-red-200">
            <Image src={profile} width={100} height={100} alt="" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-left m-0 p-0 text-xl leading-[30px] text-gray900 font-rocGroteskBold">
              {name}
            </h4>
            <span className="text-left text-sm leading-5 font-rocGroteskReg text-gray600">
              {company}, {title}
            </span>
          </div>
        </div>
        <div>
          <span className="text-black font-rocGroteskBold uppercase text-xs">
            Reviewed In
          </span>
          <Image src={LinkedIn} alt="" />
        </div>
      </div>
    </div>
  );
}
