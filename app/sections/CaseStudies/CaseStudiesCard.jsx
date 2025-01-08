import Image from "next/image";

export default function CaseStudiesCard({ link, thumbnail }) {
  return (
    <div className="w-full h-fit rounded-2xl overflow-hidden">
      <div className="max-h-[445px] h-full">
        <a
          href={link || ""}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full overflow-hidden"
        >
          <Image
            src={thumbnail}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            alt="thumbnail"
          />
        </a>
      </div>
    </div>
  );
}
