import Container from "@components/Container";
import fiverr from "@public/achievements/fiverr.png";
import google from "@public/achievements/google.png";
import upwork from "@public/achievements/upwork.png";
import Image from "next/image";

export default function MyAchievement() {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="mb-[56px]">
          <h2 className="sectionTitle">My Achievements</h2>
          <p className="sectionDesc">
            Showcasing the milestones that shaped my success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col p-6 gap-3 bg-white rounded-xl">
            <div>
              <Image src={upwork} alt="" className="rounded-xl" />
            </div>
            <div className="flex items-center p-3 bg-[#00432B] rounded-[10px]">
              <h3 className="text-[#B9F49B] text-center text-2xl font-rocGroteskBold">
                Won Upwork Top rated badge
              </h3>
            </div>
          </div>

          <div className="flex flex-col p-6 gap-3 bg-white rounded-xl">
            <div>
              <Image src={fiverr} alt="" className="rounded-xl" />
            </div>
            <div className="flex items-center p-3 bg-[#00432B] rounded-[10px]">
              <h3 className="text-[#B9F49B] text-center text-2xl font-rocGroteskBold">
                Selected for Fiverr Top landing page award
              </h3>
            </div>
          </div>

          <div className="flex flex-col p-6 gap-3 bg-white rounded-xl">
            <div>
              <Image src={google} alt="" className="rounded-xl" />
            </div>
            <div className="flex items-center p-3 bg-[#00432B] rounded-[10px] h-full">
              <h3 className="text-[#B9F49B] text-center text-2xl font-rocGroteskBold">
                Certified From Google
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
