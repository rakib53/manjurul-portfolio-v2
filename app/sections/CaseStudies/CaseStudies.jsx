import case_study1 from "@public/case_study/1.png";
import case_study2 from "@public/case_study/2.png";
import case_study3 from "@public/case_study/3.png";
import case_study4 from "@public/case_study/4.png";
import Button from "app/components/Button";
import Container from "app/components/Container";
import CaseStudiesCard from "./CaseStudiesCard";

export default function CaseStudies() {
  return (
    <section className="w-full bg-white py-[100px]" id="portfolio">
      <Container>
        <div className="flex justify-between">
          <div>
            <h3 className="sectionTitle !text-left">Noteworthy Case Studies</h3>
            <p className="sectionDesc !text-left">
              Discover How Data-Driven Design Delivered Unparalleled Results.
            </p>
          </div>
          <div>
            <Button
              label="Explore more"
              labelClass="text-[#00432B] text-lg font-rocGroteskMid text-lg leading-7 tracking-[-0.72px]"
              link="https://www.youtube.com/watch?v=Pu_71gLGegk&feature=youtu.be"
              linkTarget="_blank"
              className="flex items-center justify-between gap-[10px] py-2 px-4 bg-transparent border border-[#00432B] rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] pt-[60px]">
          <CaseStudiesCard
            cardNumber="1+"
            thumbnail={case_study1}
            link="https://www.behance.net/gallery/198875889/Adjective-Screenshot-Beautifier-SaaS-Web-Application"
          />
          <CaseStudiesCard
            cardNumber="2+"
            thumbnail={case_study2}
            link="https://www.behance.net/gallery/198883935/Verb-Website-Builder-SaaS-Web-Application"
          />
          <CaseStudiesCard
            cardNumber="3+"
            thumbnail={case_study3}
            link="https://www.behance.net/gallery/198878951/Invisible-icon-library-SaaS-Web-Application"
          />
          <CaseStudiesCard
            cardNumber="4+"
            thumbnail={case_study4}
            link="https://www.behance.net/gallery/198883057/Invisible-Design-Gallery-SaaS-Web-Application"
          />
        </div>
      </Container>
    </section>
  );
}
