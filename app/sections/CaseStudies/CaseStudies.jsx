import Container from "@components/Container";
import React from "react";
import CaseStudiesCard from "./CaseStudiesCard";

export default function CaseStudies() {
  return (
    <section className="w-full bg-[#F5F5F5] py-[100px]" id="portfolio">
      <Container>
        <div>
          <h3 className="sectionTitle">
            Transformative Solutions: Notable Case Studies
          </h3>
          <p className="sectionDesc">
            Discover How Data-Driven Design Delivered Unparalleled Results for
            Leading SaaS Ventures.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] pt-[60px]">
          <CaseStudiesCard cardNumber="1+" />
          <CaseStudiesCard cardNumber="2+" />
          <CaseStudiesCard cardNumber="3+" />
          <CaseStudiesCard cardNumber="4+" />
        </div>
      </Container>
    </section>
  );
}
