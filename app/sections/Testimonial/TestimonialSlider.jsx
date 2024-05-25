"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Recommendations from "@components/LinkdienRecommendations/Recommendations";
import {
  nextSliderIcon,
  nextWhiteSliderIcon,
  prevSliderIcon,
} from "@/utils/SVG";

export default function TestimonialSlider() {
  return (
    <div className="linkedin-side-shadow">
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
        <SwiperSlide>
          <Recommendations />
        </SwiperSlide>
        <SwiperSlide>
          <Recommendations />
        </SwiperSlide>
        <SwiperSlide>
          <Recommendations />
        </SwiperSlide>
        <SwiperSlide>
          <Recommendations />
        </SwiperSlide>
        <SwiperSlide>
          <Recommendations />
        </SwiperSlide>
        <SwiperSlide>
          <Recommendations />
        </SwiperSlide>
        <SwiperSlide>
          <Recommendations />
        </SwiperSlide>
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
    </div>
  );
}
