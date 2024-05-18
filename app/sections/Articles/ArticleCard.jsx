import Image from "next/image";
import React from "react";
import articleOneImage from "../../../public/images/article1.png";

export default function ArticleCard() {
  return (
    <div className="">
      <Image src={articleOneImage} className="rounded-[18px]" />
      <h4 className="mt-[18px]">
        8 Amazing Places to shoot photography and Videography 2023
      </h4>
      <p className="mt-[18px]">
        We document human stories with a camera. Our only goal is to convert
        your special day into images, that tell a story for generations to come.
      </p>
    </div>
  );
}
