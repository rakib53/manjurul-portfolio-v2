import Footer from "@components/Footer";
import AboutMe from "@sections/AboutMe/AboutMe";
import Article from "@sections/Articles/Article";
import Banner from "@sections/Banner/Banner";
import CaseStudies from "@sections/CaseStudies/CaseStudies";
import Companies from "@sections/Companies/Companies";
import DesignExperience from "@sections/DesignExperience/DesignExperience";
import DribbleShots from "@sections/DribbleShots/DribbleShots";
import ExploreUIKits from "@sections/ExploreUIKits/ExploreUIKits";
import HeroSection from "@sections/Hero/Hero";
import QuestionAnswer from "@sections/QuestionAnswer";
import Testimonial from "@sections/Testimonial/Testmonial";

export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <CaseStudies />
      <DesignExperience />
      <Testimonial />
      <ExploreUIKits />
      <AboutMe />
      <DribbleShots />
      <HeroSection />
      <Article />
      <QuestionAnswer />
      <Footer />
    </main>
  );
}
