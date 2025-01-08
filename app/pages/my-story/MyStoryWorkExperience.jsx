import Container from "@components/Container";
import star from "@public/star.png";
import Image from "next/image";

export default function MyStoryWorkExperience() {
  return (
    <section
      className="w-full max-w-[1440px] px-6 mx-auto rounded-xl"
      id="work_experience"
    >
      <div className="relative bg-white rounded-xl overflow-hidden">
        <Image
          src={star}
          alt="star"
          className="absolute w-[200px] h-[200px] top-0 right-0 left-auto"
        />
        <div className="py-[100px] rounded-xl">
          <Container>
            <div className="flex justify-between">
              <div>
                <h3 className="sectionTitle !text-left">Work Experience.</h3>
                <p className="sectionDesc !text-left">
                  A showcase of my professional journey and impactful
                  contributions.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              {/* Senior Product Designer, Synergy Labs */}
              <div>
                <span className="block w-full h-[1px] bg-[#D0D5DD] my-14"></span>
                <div className="flex justify-between items-center mb-[28px]">
                  <div>
                    <h1 className="text-[40px] tracking-[-1.2px] font-rocGroteskMid text-[#667085]">
                      Senior Product Designer,{" "}
                      <strong className="text-[#101828]">Synergy Labs</strong>
                    </h1>
                    <span className="text-[#344054] text-2xl font-normal tracking-[-0.72px] leading-[31px] font-rocGroteskReg opacity-[0.6]">
                      Miami, Florida, United States · Remote
                    </span>
                  </div>
                  <div>
                    <span className="text-[#949493] font-base font-medium font-rocGroteskMid">
                      Oct 2024 - Present
                    </span>
                  </div>
                </div>
                <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px] font-rocGroteskReg">
                  <span>
                    Synergy Labs is a #1 Boutique Mobile App Development Agency
                    according to Clutch, The Manifest, and Forbes based in
                    Miami, Florida, United States. As a Senior Product Designer,
                    my key responsibilities is to: <br />
                    <br />
                  </span>
                  <ul>
                    <li>
                      ✦ Design mobile app products according to clients
                      requirements.
                    </li>
                    <li>
                      ✦ Design flutter flow mobile app templates for internal
                      products.
                    </li>
                    <li>
                      ✦ Always align with project manager and design leads to
                      support design updates on client projects.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Product Designer, Invisible Studio */}
              <div>
                <span className="block w-full h-[1px] bg-[#D0D5DD] my-14"></span>
                <div className="flex justify-between items-center mb-[28px]">
                  <div>
                    <h1 className="text-[40px] tracking-[-1.2px] font-rocGroteskMid text-[#667085]">
                      Product Designer,{" "}
                      <strong className="text-[#101828]">
                        Invisible Studio
                      </strong>
                    </h1>
                    <span className="text-[#344054] text-2xl font-normal tracking-[-0.72px] leading-[31px] font-rocGroteskReg opacity-[0.6]">
                      Mumbai, Maharashtra, India · Remote
                    </span>
                  </div>
                  <div>
                    <span className="text-[#949493] font-base font-medium font-rocGroteskMid">
                      Sep 2022 - Oct 2024
                    </span>
                  </div>
                </div>
                <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px] font-rocGroteskReg">
                  <span>
                    Invisible Studio is a user experience agency based in
                    Mumbai, specializing in building SaaS, IoT, and DeFi
                    products. As a Product Designer, I have undertaken the
                    following key responsibilities:
                    <br />
                    <br />
                  </span>
                  <ul>
                    <li>
                      ✦ Served as the Design Lead for Proptechbuzz's mobile and
                      web applications.
                    </li>
                    <li>
                      ✦ Developed comprehensive design systems for both
                      platforms.
                    </li>
                    <li>
                      ✦ Lead the mobile app MVP design and oversaw the web app
                      redesign utilizing the new design system.
                    </li>
                    <li>
                      ✦ Acted as the Visual Lead for Svmman Fintech's mobile
                      app.
                    </li>
                    <li>
                      ✦ Conducted research, strategy development, and design for
                      over four internal web applications.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Product Designer, PXELO */}
              <div>
                <span className="block w-full h-[1px] bg-[#D0D5DD] my-14"></span>
                <div className="flex justify-between items-center mb-[28px]">
                  <div>
                    <h1 className="text-[40px] tracking-[-1.2px] font-rocGroteskMid text-[#667085]">
                      Product Designer,{" "}
                      <strong className="text-[#101828]">PXELO</strong>
                    </h1>
                    <span className="text-[#344054] text-2xl font-normal tracking-[-0.72px] leading-[31px] font-rocGroteskReg opacity-[0.6]">
                      Tangail, Dhaka, Bangladesh · Remote
                    </span>
                  </div>
                  <div>
                    <span className="text-[#949493] font-base font-medium font-rocGroteskMid">
                      Jun 2021 - Aug 2022
                    </span>
                  </div>
                </div>
                <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px] font-rocGroteskReg">
                  <span>
                    Pexlo is a service-based design agency founded on a deep
                    commitment to creativity and innovation. As a Product
                    Designer at Pexlo, I have contributed to the following key
                    projects:
                    <br />
                    <br />
                  </span>
                  <ul>
                    <li>
                      ✦ Translated the Brac Kumon concept into a web-based
                      platform for Brac Limited.
                    </li>
                    <li>
                      ✦ Led the redesign of Uttara University’s website,
                      introducing a new design system.
                    </li>
                    <li>
                      ✦ Created an innovative visual style for the website of
                      Dhaka Journal.
                    </li>
                  </ul>
                </div>
              </div>

              {/* UI/UX Designer, Uptake */}
              <div>
                <span className="block w-full h-[1px] bg-[#D0D5DD] my-14"></span>
                <div className="flex justify-between items-center mb-[28px]">
                  <div>
                    <h1 className="text-[40px] tracking-[-1.2px] font-rocGroteskMid text-[#667085]">
                      UI/UX Designer,{" "}
                      <strong className="text-[#101828]">Uptake</strong>
                    </h1>
                    <span className="text-[#344054] text-2xl font-normal tracking-[-0.72px] leading-[31px] font-rocGroteskReg opacity-[0.6]">
                      Dhaka, Bangladesh · Remote
                    </span>
                  </div>
                  <div>
                    <span className="text-[#949493] font-base font-medium font-rocGroteskMid">
                      Nov 2020 - Apr 2021
                    </span>
                  </div>
                </div>
                <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px] font-rocGroteskReg">
                  <span>
                    Uptake is a product-focused startup offering proctoring
                    solutions to streamline the exam-taking process for
                    university students. In my role as a UI/UX Designer, I have
                    successfully contributed to the following:
                    <br />
                    <br />
                  </span>

                  <ul>
                    <li>
                      ✦ Implemented the Untitled UI Design System into the
                      existing design framework, enhancing workflow efficiency.
                    </li>
                    <li>
                      ✦ Designed key features for exam creation, taking, and
                      monitoring within university applications.
                    </li>
                    <li>
                      ✦ Developed an AI-powered exam monitoring protection
                      system, ensuring enhanced security and integrity during
                      examination.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Brand Designer, Kryptup */}
              <div>
                <span className="block w-full h-[1px] bg-[#D0D5DD] my-14"></span>
                <div className="flex justify-between items-center mb-[28px]">
                  <div>
                    <h1 className="text-[40px] tracking-[-1.2px] font-rocGroteskMid text-[#667085]">
                      Brand Designer,{" "}
                      <strong className="text-[#101828]">Kryptup</strong>
                    </h1>
                    <span className="text-[#344054] text-2xl font-normal tracking-[-0.72px] leading-[31px] font-rocGroteskReg opacity-[0.6]">
                      Toronto, Ontario, Canada · Remote
                    </span>
                  </div>
                  <div>
                    <span className="text-[#949493] font-base font-medium font-rocGroteskMid">
                      Dec 2019 - Sep 2020
                    </span>
                  </div>
                </div>
                <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px] font-rocGroteskReg">
                  <span>
                    Kryptup is a Canadian DeFi ecosystem built on the Fantom
                    blockchain, offering staking, multi-chain swapping, and
                    bridging capabilities across five different blockchains. In
                    my role as a Brand Designer, I contributed to the following:
                    <br />
                    <br />
                  </span>

                  <ul>
                    <li>
                      ✦ Designed and developed the brand identity for Kryptup.
                    </li>
                    <li>
                      ✦ Created custom assets for both the website and mobile
                      application.
                    </li>
                    <li>
                      ✦ Collaborated closely with the marketing team to produce
                      engaging social media marketing content.
                    </li>

                    <li>
                      ✦ Actively engaged with stakeholders to drive brand growth
                      and ensure alignment with the company's vision.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Graphic Designer, Craze Creations */}
              <div>
                <span className="block w-full h-[1px] bg-[#D0D5DD] my-14"></span>
                <div className="flex justify-between items-center mb-[28px]">
                  <div>
                    <h1 className="text-[40px] tracking-[-1.2px] font-rocGroteskMid text-[#667085]">
                      Graphic Designer,{" "}
                      <strong className="text-[#101828]">
                        Craze Creations
                      </strong>
                    </h1>
                    <span className="text-[#344054] text-2xl font-normal tracking-[-0.72px] leading-[31px] font-rocGroteskReg opacity-[0.6]">
                      Sydney, New South Wales, Australia · Remote
                    </span>
                  </div>
                  <div>
                    <span className="text-[#949493] font-base font-medium font-rocGroteskMid">
                      Apr 2019 - Oct 2019
                    </span>
                  </div>
                </div>
                <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px] font-rocGroteskReg">
                  <span>
                    Craze Creations is a Sydney-based web design and digital
                    marketing agency specializing in inspiring design, web
                    development, and innovative digital marketing solutions for
                    small to mid-sized businesses. In my role as a Graphic
                    Designer, I was responsible for the following:
                    <br />
                    <br />
                  </span>

                  <ul>
                    <li>
                      ✦ Designed logos and developed comprehensive brand
                      identities.
                    </li>
                    <li>✦ Created visually engaging social media designs.</li>
                    <li>
                      ✦ Developed flyers and brochures for various marketing
                      campaigns.
                    </li>

                    <li>
                      ✦ Produced custom T-shirt designs for promotional and
                      branding purposes.
                    </li>
                    <li>
                      ✦ Designed print and web banners to support both online
                      and offline marketing initiatives.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
