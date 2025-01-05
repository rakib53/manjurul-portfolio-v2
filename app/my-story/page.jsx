import WorkExperience from "@sections/WorkExperience/WorkExperience";
import EducationalExperience from "app/pages/my-story/EducationalExperience";
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
    </main>
  );
}
