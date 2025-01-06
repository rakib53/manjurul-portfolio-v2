import Container from "@components/Container";
import image_five from "@public/community_activities/image_five.png";
import image_four from "@public/community_activities/image_four.png";
import image_one from "@public/community_activities/image_one.png";
import image_three from "@public/community_activities/image_three.png";
import image_two from "@public/community_activities/image_two.png";
import Image from "next/image";

export default function CommunityActivities() {
  return (
    <section className="w-full pb-6 px-6">
      <div className="w-full py-[20px] sm:py-[100px] bg-white rounded-xl">
        <Container>
          <div className="mb-[56px]">
            <h2 className="sectionTitle">Community Activity</h2>
            <p className="sectionDesc">
              Connecting with the design community to learn and grow.
            </p>
          </div>
          <div className="flex flex-col gap-[14px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Image src={image_one} alt="" className="w-full" />
              </div>
              <div>
                <Image src={image_two} alt="" className="w-full" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <Image src={image_three} alt="" className="w-full" />
              </div>
              <div>
                <Image src={image_four} alt="" className="w-full" />
              </div>
              <div>
                <Image src={image_five} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
