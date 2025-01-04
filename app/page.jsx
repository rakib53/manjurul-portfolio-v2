import AboutMe from "@sections/AboutMe/AboutMe";
import Banner from "@sections/Banner/Banner";
import CaseStudies from "@sections/CaseStudies/CaseStudies";
import Companies from "@sections/Companies/Companies";
import Partnership from "@sections/Partnership/Partnership";
import Testimonial from "@sections/Testimonial/Testimonial";
import WorkExperience from "@sections/WorkExperience/WorkExperience";
import Footer from "app/components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <CaseStudies />
      <AboutMe />
      <WorkExperience />
      <Testimonial />
      <Partnership />
      <Footer />
    </main>
  );
}
