import kitOne from "@public/ui_kits/1.png";
import kitTwo from "@public/ui_kits/2.png";
import kitThree from "@public/ui_kits/3.png";
import kitFour from "@public/ui_kits/4.png";
import { blackRightArrow, whiteRightArrow } from "@utils/SVG";
import Button from "app/components/Button";
import Container from "app/components/Container";
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
                link="https://manjuruldesign.gumroad.com/"
                linkTarget="_blank"
                className="gray_btn flex items-center justify-between gap-[10px] py-2 px-4"
                icon={whiteRightArrow}
                iconPosition="right"
              />
              <Button
                label="Book a call"
                link="https://cal.com/manjurul"
                linkTarget="_blank"
                labelClass="text-dark"
                className="white_btn flex items-center justify-between gap-[10px] py-2 px-4"
                icon={blackRightArrow}
                iconPosition="right"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9 pt-[60px]">
            <ExploreUIKitsCard
              thumbnail={kitOne}
              link="https://manjuruldesign.gumroad.com/l/task"
            />
            <ExploreUIKitsCard thumbnail={kitTwo} link="" />
            <ExploreUIKitsCard thumbnail={kitThree} link="" />
            <ExploreUIKitsCard thumbnail={kitFour} link="" />
          </div>
        </div>
      </Container>
    </section>
  );
}
