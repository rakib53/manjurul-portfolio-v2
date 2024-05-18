import Footer from "./components/Footer";
import AboutMe from "./sections/AboutMe/AboutMe";
import Article from "./sections/Articles/Article";
import Banner from "./sections/Banner/Banner";
import CaseStudies from "./sections/CaseStudies/CaseStudies";
import DesignExperience from "./sections/DesignExperience/DesignExperience";
import ExploreUIKits from "./sections/ExploreUIKits/ExploreUIKits";
import QuestionAnswer from "./sections/QuestionAnswer";

export default function Home() {
  return (
    <main>
      <Banner />
      <CaseStudies />
      <DesignExperience />
      <ExploreUIKits />
      <AboutMe />
      <Article />
      <QuestionAnswer />
      <Footer />
    </main>
  );
}
