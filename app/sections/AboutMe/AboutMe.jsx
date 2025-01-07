import about_me from "@public/images/about_me.png";
import Container from "app/components/Container";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="pt-[113px] pb-[160px]" id="about-me">
      <Container>
        <div className="flex justify-between gap-11 items-stretch bg-white rounded-s-3xl rounded-xl overflow-hidden">
          <div className="w-1/2 !h-auto">
            <Image
              src={about_me}
              className="w-full !h-[580px] object-cover"
              alt="Manjurul islam designer"
            />
          </div>
          <div className="flex flex-col w-1/2 pr-10 py-10">
            <h3 className="font-rocGroteskBold text-[36px] leading-[48px] tracking-[#1D2939] text-left text-[#1D2939] mb-4">
              Product designer with Design systems expertise.
            </h3>
            <p className="sectionDesc !text-left pb-[80px]">
              I’m a Product Designer with over 5 years of expertise in crafting
              intuitive user interfaces and developing scalable design systems.
              Proven ability to lead cross-functional teams, solve complex
              design challenges, and deliver user-centered solutions that align
              with business goals. <br /> <br /> I always adept at translating
              user needs into innovative designs, with a focus on efficiency,
              creativity, and attention to detail.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/my-story"
                className="flex items-center gap-1 text-[#00432B] text-lg font-rocGroteskMid leading-7 tracking-[-0.72px]"
              >
                <span>Learn my story</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M4.46355 9.99996H16.1302M16.1302 9.99996L10.2969 4.16663M16.1302 9.99996L10.2969 15.8333"
                      stroke="#00432B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="p-9 rounded-xl flex flex-col gap-6 bg-[#FFECC8]">
            <h3 className="text-gray700 text-[28px] leading-9 font-rocGroteskBold">
              #1. User-Centric Interface Design
            </h3>
            <p className="text-gray800 text-base leading-6 font-rocGroteskReg">
              Crafting intuitive interfaces tailored to your users' needs,
              ensuring seamless navigation and enhanced user satisfaction.
            </p>
          </div>

          <div className="p-9 rounded-xl flex flex-col gap-6 bg-[#DEF5E4]">
            <h3 className="text-gray700 text-[28px] leading-9 font-rocGroteskBold">
              #2. Design System Development
            </h3>
            <p className="text-gray800 text-base leading-6 font-rocGroteskReg">
              Building robust design systems to maintain consistency and
              scalability across your SaaS web application, facilitating
              efficient development and future enhancements.
            </p>
          </div>

          <div className="p-9 rounded-xl flex flex-col gap-6 bg-[#FFE2F5]">
            <h3 className="text-gray700 text-[28px] leading-9 font-rocGroteskBold">
              #3. Prototyping & Iterative Design
            </h3>
            <p className="text-gray800 text-base leading-6 font-rocGroteskReg">
              Accelerating the design process through rapid prototyping and
              iterative design cycles, allowing for quick validation of ideas
              and incorporation of user feedback.
            </p>
          </div>

          <div className="p-9 rounded-xl flex flex-col gap-6 bg-[#FFDECD]">
            <h3 className="text-gray700 text-[28px] leading-9 font-rocGroteskBold">
              #4. User Experience Optimization
            </h3>
            <p className="text-gray800 text-base leading-6 font-rocGroteskReg">
              Conducting in-depth user research and testing to uncover pain
              points and optimize user journeys, ensuring maximum engagement and
              retention within your SaaS platform.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="w-full h-[360px] p-6 rounded-[20px] bg-white relative overflow-hidden experienceCard1">
            <div className="flex flex-col gap-[18px] absolute bottom-[24px] left-[24px]">
              <h3 className="text-[72px] leading-[90px] font-rocGroteskMid text-[#255E4A]">
                5+
              </h3>
              <p className="text-base leading-6 text-gray600 font-rocGroteskMid">
                Years of working experience
              </p>
            </div>
          </div>

          <div className="w-full h-[360px] p-6 rounded-[20px] bg-white relative overflow-hidden experienceCard2">
            <div className="flex flex-col gap-[18px] absolute bottom-[24px] left-[24px]">
              <h3 className="text-[72px] leading-[90px] font-rocGroteskMid text-[#255E4A]">
                120+
              </h3>
              <p className="text-base leading-6 text-gray600 font-rocGroteskMid">
                Collaborate with brands
              </p>
            </div>
          </div>

          <div className="w-full h-[360px] p-6 rounded-[20px] bg-white relative overflow-hidden experienceCard3">
            <div className="flex flex-col gap-[18px] absolute bottom-[24px] left-[24px]">
              <h3 className="text-[72px] leading-[90px] font-rocGroteskMid text-[#255E4A]">
                500+
              </h3>
              <p className="text-base leading-6 text-gray600 font-rocGroteskMid">
                Projects
              </p>
            </div>
          </div>

          <div className="w-full h-[360px] p-6 rounded-[20px] bg-white relative overflow-hidden experienceCard4">
            <div className="flex flex-col gap-[18px] absolute bottom-[24px] left-[24px]">
              <h3 className="text-[72px] leading-[90px] font-rocGroteskMid text-[#255E4A]">
                350+
              </h3>
              <p className="text-base leading-6 text-gray600 font-rocGroteskMid">
                Happy clients
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
