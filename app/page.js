import Footer from "./components/Footer";
import AboutMe from "./sections/AboutMe/AboutMe";
import Article from "./sections/Articles/Article";
import QuestionAnswer from "./sections/QuestionAnswer";

export default function Home() {
  return (
    <main>
      <AboutMe />
      <Article />
      <QuestionAnswer />
      <Footer />
    </main>
  );
}
