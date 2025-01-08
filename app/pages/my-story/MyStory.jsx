import my_story_image from "@public/my_story_image.png";
import Image from "next/image";

export default function MyStory() {
  return (
    <section className="w-full max-w-[1440px] px-6 mx-auto my-4">
      <div className="flex gap-4">
        <div className="max-w-[450px] w-full">
          <Image src={my_story_image} alt="" />
        </div>
        <div className="bg-white p-12 rounded-xl">
          <h1 className="text-[36px] text-[#1D2939] font-rocGroteskBold leading-10 tracking-[-1.08px] pb-4">
            My Story
          </h1>
          <p className="text-[#344054] text-lg font-rocGroteskReg tracking-[0.54px]">
            Hello, I’m Md Manjurul Islam, hailing from Satkhira, Bangladesh. My
            design journey began in 2019 when I started as a Content Designer at
            a marketing agency. Later, I transitioned to freelancing on Upwork,
            specializing in Brand Identity Design. <br /> <br />
            Over the years, I’ve had the privilege of collaborating with
            remarkable brands and individuals. As my passion for design evolved,
            I recognized the potential for creative innovation in the digital
            world. This realization led me to pursue a career in digital product
            design.
            <br /> <br />
            As a Digital Product Designer, I am driven by the desire to craft
            innovative, aesthetically pleasing solutions that align with both
            business goals and user preferences. I believe that achieving the
            right balance between these elements ensures a product's success.
            <br /> <br />I embrace challenges, learn from my mistakes, and take
            ownership of my growth. Outside of work, I enjoy playing cricket,
            which has taught me the value of teamwork and instilled the
            confidence to always aim for success.
          </p>
        </div>
      </div>
    </section>
  );
}
