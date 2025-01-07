import ExploreMoreBtn from "@components/Buttons/ExploreMoreBtn";
import case_study1 from "@public/case_study/1.png";
import case_study2 from "@public/case_study/2.png";
import case_study3 from "@public/case_study/3.png";
import case_study4 from "@public/case_study/4.png";
import Container from "app/components/Container";
import CaseStudiesCard from "./CaseStudiesCard";

export default function CaseStudies() {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto bg-white py-[100px] rounded-xl"
      id="portfolio"
    >
      <Container>
        <div className="flex justify-between">
          <div>
            <h3 className="sectionTitle !text-left">Noteworthy Case Studies</h3>
            <p className="sectionDesc !text-left">
              Discover How Data-Driven Design Delivered Unparalleled Results.
            </p>
          </div>
          <div>
            <ExploreMoreBtn
              link="https://www.behance.net/manjuruldesign"
              target="_"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] pt-[60px]">
          <CaseStudiesCard
            cardNumber="1+"
            thumbnail={case_study1}
            link="https://www.behance.net/gallery/215351125/Pxelo-Corporate-Agency-Website-Design"
          />
          <CaseStudiesCard
            cardNumber="2+"
            thumbnail={case_study2}
            link="https://www.behance.net/gallery/198883935/Verb-Website-Builder-SaaS-Web-Application"
          />
          <CaseStudiesCard
            cardNumber="3+"
            thumbnail={case_study3}
            link="https://www.behance.net/gallery/198875889/Adjective-Screenshot-Beautifier-SaaS-Web-Application"
          />
          <CaseStudiesCard
            cardNumber="4+"
            thumbnail={case_study4}
            link="https://www.behance.net/gallery/209029753/Svamaan-Fintech-Mobile-App"
          />
        </div>
      </Container>
    </section>
  );
}
