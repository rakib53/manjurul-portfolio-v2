import React from "react";
import Button from "@components/Button";
import Container from "@components/Container";
import { blackRightArrow, whiteRightArrow } from "@utils/SVG";
import ExploreUIKitsCard from "./ExploreUIKitsCard";

export default function ExploreUIKits() {
  return (
    <section className="w-full py-[136px] bg-white bg-[url('/images/UI_KIT/2.png')] bg-cover bg-center">
      <Container>
        <div>
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <h3 className="sectionTitle !text-left">
                Discover and Elevate <br /> Your SaaS Design with my UI Kits
              </h3>
              <p className="sectionDesc !text-left">
                Explore my Comprehensive UI Kits to Ensure Design Quality and
                Streamline <br /> Your Process,{" "}
                <span className="text-lg leading-7 font-rocGroteskBold text-success600">
                  Available for Purchase.
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                label="Explore all kits"
                className="gray_btn flex items-center justify-between gap-[10px] py-2 px-4"
                icon={whiteRightArrow}
                iconPosition="right"
              />
              <Button
                label="Book a call"
                labelClass="text-dark"
                className="white_btn flex items-center justify-between gap-[10px] py-2 px-4"
                icon={blackRightArrow}
                iconPosition="right"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9 pt-[60px]">
            <ExploreUIKitsCard />
            <ExploreUIKitsCard />
            <ExploreUIKitsCard />
            <ExploreUIKitsCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
