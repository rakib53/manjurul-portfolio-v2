import Footer from "@components/Footer";
import AboutMe from "@sections/AboutMe/AboutMe";
import Article from "@sections/Articles/Article";
import Banner from "@sections/Banner/Banner";
import CaseStudies from "@sections/CaseStudies/CaseStudies";
import Companies from "@sections/Companies/Companies";
import DesignExperience from "@sections/DesignExperience/DesignExperience";
import DribbleShots from "@sections/DribbleShots/DribbleShots";
import ExploreUIKits from "@sections/ExploreUIKits/ExploreUIKits";
import Partnership from "@sections/Partnership/Partnership";
import QuestionAnswer from "@sections/QuestionAnswer/QuestionAnswer";
import Testimonial from "@sections/Testimonial/Testimonial";

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
      <Partnership />
      <Article />
      <QuestionAnswer />
      <Footer />
    </main>
  );
}
