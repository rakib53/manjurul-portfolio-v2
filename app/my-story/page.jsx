import Footer from "@components/Footer";
import Partnership from "@sections/Partnership/Partnership";
import CommunityActivities from "app/pages/my-story/CommunityActivities";
import EducationalExperience from "app/pages/my-story/EducationalExperience";
import MyAchievement from "app/pages/my-story/MyAchievement";
import MyCertifications from "app/pages/my-story/MyCertifications";
import MyStory from "app/pages/my-story/MyStory";
import MyStoryBanner from "app/pages/my-story/MyStoryBanner";
import MyStoryWorkExperience from "app/pages/my-story/MyStoryWorkExperience";

export default function page() {
  return (
    <main>
      <MyStoryBanner />
      <MyStory />
      <EducationalExperience />
      <MyCertifications />
      <MyStoryWorkExperience />
      <MyAchievement />
      <CommunityActivities />
      <Partnership />
      <Footer />
    </main>
  );
}
