import React from "react";
import Image from "next/image";
import Button from "@components/Button";
import Container from "@components/Container";
import about_me from "@public/images/about_me.png";
import { orangeRightArrow, resumeIcon } from "@utils/SVG";

export default function AboutMe() {
  return (
    <section className="pt-[113px] pb-[160px] bg-white" id="about-me">
      <Container>
        <div className="flex justify-between gap-11 items-center">
          <div className="w-1/2">
            <Image
              src={about_me}
              height={500}
              className="w-full rounded-3xl"
              alt="Manjurul islam designer"
            />
          </div>
          <div className="flex flex-col gap-10 w-1/2">
            <h3 className="sectionTitle !text-left">
              Meet Your Expert SaaS Web <br /> Application Designer
            </h3>
            <p className="sectionDesc !text-left">
              I translate user insights into stunning, user-friendly SaaS web
              applications. My expertise in design systems and meticulous
              organization ensures your applications are scalable and seamless,
              from initial idea to launch.
              <br />
              <br />
              Through in-depth research, rapid prototyping, and user testing, I
              uncover core problems and craft bespoke solutions specifically
              tailored to your SaaS needs. This data-driven approach guarantees
              impactful business results for your application.
            </p>
            <div className="flex items-center gap-4">
              <Button
                label="Book a call"
                link="https://cal.com/manjurul"
                linkTarget="_blank"
                className="orange_btn flex items-center gap-[10px] py-2 px-4"
                icon={orangeRightArrow}
                iconPosition="right"
              />
              <Button
                label="My resume"
                link="https://drive.google.com/file/d/19mzhsmOTDttj0kBzWfMW4aHLupHPfGv3/view?usp=sharing"
                linkTarget="_blank"
                className="gray_btn flex items-center gap-[10px] py-2 px-4"
                icon={resumeIcon}
                iconPosition="left"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
