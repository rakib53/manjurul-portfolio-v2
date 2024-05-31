import React from "react";

export default function ArticleCard({ item }) {
  const { thumbnail, title, description } = item;

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${thumbnail})`,
          width: "100%",
          height: "100%",
          width: "100%",
          height: "240px",
          marginBottom: "30px",
          border: "1px solid #ddd",
          borderRadius: "18px",
        }}
      ></div>
      <div className="flex flex-col gap-[10px] mt-[18px]">
        <h4 className="text-gray900 text-xl leading-[30px] font-rocGroteskBold">
          {title?.length > 50 ? title?.slice(0, 55) + "..." : title}
        </h4>
        <div
          className="text-sm leading-5 font-rocGroteskReg text-gray600"
          dangerouslySetInnerHTML={{
            __html:
              description?.length > 50
                ? description?.slice(0, 140) + "..."
                : description,
          }}
        />
      </div>
    </div>
  );
}
