"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import ArticleCard from "./ArticleCard";

export default function ArticleSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={36}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
