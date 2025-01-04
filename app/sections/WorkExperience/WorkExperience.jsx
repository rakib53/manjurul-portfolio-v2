import Button from "@components/Button";
import Container from "@components/Container";

export default function WorkExperience() {
  return (
    <section className="py-[100px] bg-white">
      <Container>
        <div className="flex justify-between">
          <div>
            <h3 className="sectionTitle !text-left">Work Experience.</h3>
            <p className="sectionDesc !text-left">
              A showcase of my professional journey and impactful contributions.
            </p>
          </div>
          <div>
            <Button
              label="Explore more"
              link="https://drive.google.com/file/d/19mzhsmOTDttj0kBzWfMW4aHLupHPfGv3/view?usp=sharing"
              linkTarget="_blank"
              className="gray_btn flex items-center justify-between gap-[10px] py-2 px-4 font-rocGroteskMid"
              iconPosition="left"
            />
          </div>
        </div>

        <div className="flex flex-col">
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
            <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px]">
              <span>
                Synergy Labs is a #1 Boutique Mobile App Development Agency
                according to Clutch, The Manifest, and Forbes based in Miami,
                Florida, United States. As a Senior Product Designer, my key
                responsibilities is to: <br />
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

          <div>
            <span className="block w-full h-[1px] bg-[#D0D5DD] my-14"></span>
            <div className="flex justify-between items-center mb-[28px]">
              <div>
                <h1 className="text-[40px] tracking-[-1.2px] font-rocGroteskMid text-[#667085]">
                  Product Designer,{" "}
                  <strong className="text-[#101828]">Invisible Studio</strong>
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
            <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px]">
              <span>
                Invisible Studio is a user experience agency based in Mumbai,
                specializing in building SaaS, IoT, and DeFi products. As a
                Product Designer, I have undertaken the following key
                responsibilities:
                <br />
                <br />
              </span>
              <ul>
                <li>
                  ✦ Served as the Design Lead for Proptechbuzz's mobile and web
                  applications.
                </li>
                <li>
                  ✦ Developed comprehensive design systems for both platforms.
                </li>
                <li>
                  ✦ Lead the mobile app MVP design and oversaw the web app
                  redesign utilizing the new design system.
                </li>
                <li>
                  ✦ Acted as the Visual Lead for Svmman Fintech's mobile app.
                </li>
                <li>
                  ✦ Conducted research, strategy development, and design for
                  over four internal web applications.
                </li>
              </ul>
            </div>
          </div>

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
            <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px]">
              <span>
                Pexlo is a service-based design agency founded on a deep
                commitment to creativity and innovation. As a Product Designer
                at Pexlo, I have contributed to the following key projects:
                <br />
                <br />
              </span>
              <ul>
                <li>
                  ✦ Translated the Brac Kumon concept into a web-based platform
                  for Brac Limited.
                </li>
                <li>
                  ✦ Led the redesign of Uttara University’s website, introducing
                  a new design system.
                </li>
                <li>
                  ✦ Created an innovative visual style for the website of Dhaka
                  Journal.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
