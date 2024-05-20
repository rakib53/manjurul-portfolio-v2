import Recommendations from "@/app/components/LinkdienRecommendations/Recommendations";
import React from "react";
import TestimonialSlider from "./TestmonialSlider";

export default function Testimonial() {
  return (
    <section className="w-full py-[100px] bg-[#F5F5F5]">
      <div>
        <h2 className="sectionTitle">Hear What Others Have to Say</h2>
        <p className="sectionDesc">
          Discover How My SaaS Solutions Transformed Businesses, <br /> Straight
          from My Valued Clients.
        </p>

        <div
          className="py-[60px]"
          style={{
            background:
              "linear-gradient(262deg, rgba(245, 245, 245, 0.00) 6.42%, #F5F5F5 93.85%)",
          }}
        >
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}
