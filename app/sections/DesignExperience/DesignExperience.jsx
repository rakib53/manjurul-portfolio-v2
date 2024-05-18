import Container from "@/app/components/Container";
import React from "react";

export default function DesignExperience() {
  return (
    <section className="w-full bg-white py-[100px]">
      <Container>
        <div>
          <h2 className="sectionTitle">
            Elevate Your SaaS Experience with Tailored Solutions
          </h2>
          <p className="sectionDesc">
            Unlock the Power of User-Centric Design for Seamless SaaS Web
            Applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-[60px] pb-[16px]">
          <div className="p-9 rounded-xl flex flex-col gap-6 bg-[#FFECC8]">
            <h3 className="text-gray700 text-[30px] leading-9 font-rocGroteskBold">
              #1. User-Centric Interface Design
            </h3>
            <p className="text-gray800 text-base leading-6 font-rocGroteskReg">
              Crafting intuitive interfaces tailored to your users' needs,
              ensuring seamless navigation and enhanced user satisfaction.
            </p>
          </div>

          <div className="p-9 rounded-xl flex flex-col gap-6 bg-[#DEF5E4]">
            <h3 className="text-gray700 text-[30px] leading-9 font-rocGroteskBold">
              #2. Design System Development
            </h3>
            <p className="text-gray800 text-base leading-6 font-rocGroteskReg">
              Building robust design systems to maintain consistency and
              scalability across your SaaS web application, facilitating
              efficient development and future enhancements.
            </p>
          </div>

          <div className="p-9 rounded-xl flex flex-col gap-6 bg-[#FFE2F5]">
            <h3 className="text-gray700 text-[30px] leading-9 font-rocGroteskBold">
              #3. Prototyping & Iterative Design
            </h3>
            <p className="text-gray800 text-base leading-6 font-rocGroteskReg">
              Accelerating the design process through rapid prototyping and
              iterative design cycles, allowing for quick validation of ideas
              and incorporation of user feedback.
            </p>
          </div>

          <div className="p-9 rounded-xl flex flex-col gap-6 bg-[#FFDECD]">
            <h3 className="text-gray700 text-[30px] leading-9 font-rocGroteskBold">
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
          <div className="w-full h-[360px] p-6 rounded-[20px] bg-[#F2F4F5] relative overflow-hidden experienceCard1">
            <div className="flex flex-col gap-[18px] absolute bottom-[24px] left-[24px]">
              <h3 className="text-[72px] leading-[90px] font-rocGroteskMid text-gray900">
                4+
              </h3>
              <p className="text-base leading-6 text-gray600">
                Years of working experience
              </p>
            </div>
          </div>

          <div className="w-full h-[360px] p-6 rounded-[20px] bg-[#F2F4F5] relative overflow-hidden experienceCard2">
            <div className="flex flex-col gap-[18px] absolute bottom-[24px] left-[24px]">
              <h3 className="text-[72px] leading-[90px] font-rocGroteskMid text-gray900">
                10+
              </h3>
              <p className="text-base leading-6 text-gray600">
                Collaborate with brands
              </p>
            </div>
          </div>

          <div className="w-full h-[360px] p-6 rounded-[20px] bg-[#F2F4F5] relative overflow-hidden experienceCard3">
            <div className="flex flex-col gap-[18px] absolute bottom-[24px] left-[24px]">
              <h3 className="text-[72px] leading-[90px] font-rocGroteskMid text-gray900">
                50+
              </h3>
              <p className="text-base leading-6 text-gray600">Projects</p>
            </div>
          </div>

          <div className="w-full h-[360px] p-6 rounded-[20px] bg-[#F2F4F5] relative overflow-hidden experienceCard4">
            <div className="flex flex-col gap-[18px] absolute bottom-[24px] left-[24px]">
              <h3 className="text-[72px] leading-[90px] font-rocGroteskMid text-gray900">
                35+
              </h3>
              <p className="text-base leading-6 text-gray600">Happy clients</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
