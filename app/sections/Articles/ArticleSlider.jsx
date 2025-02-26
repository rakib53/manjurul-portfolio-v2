"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { nextSliderIcon, prevSliderIcon } from "@utils/SVG";
import { Navigation, Pagination } from "swiper/modules";
import ArticleCard from "./ArticleCard";

export default function ArticleSlider({ blog }) {
  const { items } = blog;

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={36}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items?.map((item) => (
          <SwiperSlide>
            <ArticleCard item={item} />
          </SwiperSlide>
        ))}

        <div className="absolute bottom-[50px] w-full z-50 flex justify-center">
          <div className="w-[300px] flex justify-center items-center !gap-6">
            <div className="swiper-button-prev custom-button">
              {prevSliderIcon}
            </div>
            <div className="swiper-pagination !w-fit"></div>
            <div className="swiper-button-next custom-button">
              {nextSliderIcon}
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}
