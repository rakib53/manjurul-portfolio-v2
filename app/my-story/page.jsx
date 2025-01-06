import Footer from "@components/Footer";
import Partnership from "@sections/Partnership/Partnership";
import WorkExperience from "@sections/WorkExperience/WorkExperience";
import CommunityActivities from "app/pages/my-story/CommunityActivities";
import EducationalExperience from "app/pages/my-story/EducationalExperience";
import MyAchievement from "app/pages/my-story/MyAchievement";
import MyCertifications from "app/pages/my-story/MyCertifications";
import MyStory from "app/pages/my-story/MyStory";
import MyStoryBanner from "app/pages/my-story/MyStoryBanner";

export default function page() {
  return (
    <main>
      <MyStoryBanner />
      <MyStory />
      <EducationalExperience />
      <MyCertifications />
      <WorkExperience />
      <MyAchievement />
      <CommunityActivities />
      <Partnership />
      <Footer />
    </main>
  );
}
