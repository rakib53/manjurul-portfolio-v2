import Carlos_Gomez from "@public/testimonials_clients/Carlos_Gomez.png";
import Emily_Ross from "@public/testimonials_clients/Emily_Ross.png";
import Ethan_Wilson from "@public/testimonials_clients/Ethan_Wilson.png";
import Linda_Brown from "@public/testimonials_clients/Linda_Brown.png";
import Mohammad_Rahman from "@public/testimonials_clients/Mohammad_Rahman.png";
import Sophia_Kim from "@public/testimonials_clients/Sophia_Kim.png";
import Tom_Harris from "@public/testimonials_clients/Tom_Harris.png";
import ContinuesSlider from "app/components/ContinuesSlider/ContinuesSlider";

const linkedinTestimonials = [
  {
    description:
      "Manjurul’s creativity brought a fresh perspective to our project. His designs were well-researched and thoughtfully executed. He maintained great communication throughout and was always open to feedback. The result was an exceptional interface that is already receiving praise from users.",
    name: "Mohammad Rahman",
    company: "Founder, Farisha Foods",
    title: "",
    profile: Mohammad_Rahman,
  },
  {
    description:
      "I was impressed by how effortlessly Manjurul handled our project. From understanding the brief to delivering high-quality designs, he demonstrated a deep understanding of product design. The final result was exactly what we hoped for and more. I wouldn’t hesitate to hire him again.",
    name: "Tom Harris",
    company: "CEO at ExploreNow",
    title: "",
    profile: Tom_Harris,
  },
  {
    description:
      "It was a pleasure working with Manjurul. His designs are elegant, intuitive, and perfectly aligned with user needs. What stood out was his dedication to perfection—he worked tirelessly to fine-tune every element. I’m excited to see how his designs resonate with our audience.",
    name: "Carlos Gomez",
    company: "Founder of EduPro",
    title: "",
    profile: Carlos_Gomez,
  },
  {
    description:
      "Manjurul’s design expertise made a huge difference for our app. He understood our requirements thoroughly and delivered designs that aligned perfectly with our goals. The documentation and design system were top-notch, ensuring seamless integration for our developers. It was a pleasure working with him.",
    name: "Sophia Kim",
    company: "Head of Design at HealthEase",
    title: "",
    profile: Sophia_Kim,
  },
  {
    description:
      "I highly recommend Manjurul to anyone looking for a skilled and reliable designer. He transformed our platform into an intuitive and visually stunning experience. His communication was excellent throughout the project, and he consistently delivered on time. The final product is already receiving great feedback from our users. ",
    name: "Ethan Wilson",
    company: "Co-Founder at FinGrow",
    title: "",
    profile: Ethan_Wilson,
  },
  {
    description:
      "Working with Manjurul was a fantastic experience. He quickly understood our vision and transformed it into a beautiful, functional design. His insights into user behavior were invaluable, and he delivered beyond what we expected. Communication was smooth, and the process was stress-free.",
    name: "Emily Ross",
    company: "COO at StartupHub",
    title: "",
    profile: Emily_Ross,
  },
  {
    description:
      "Manjurul delivered exactly what we envisioned and more. His attention to detail and ability to create user-friendly designs impressed our entire team. The handoff process was seamless, with all assets well-organized and ready to implement. His professionalism and creativity are remarkable, and I can’t wait to work with him.",
    name: "Linda Brown",
    company: "Marketing Director at GreenLeaf",
    title: "",
    profile: Linda_Brown,
  },
];

export default function Testimonial() {
  return (
    <section className="w-full py-[100px]">
      <div className="mb-[56px]">
        <h2 className="sectionTitle">Feedback From Dream Chasers</h2>
        <p className="sectionDesc">
          See how my product design solutions transformed businesses, directly
          from my clients.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <ContinuesSlider
          width={690}
          mobileWidth={690}
          gap={16}
          contents={linkedinTestimonials}
          animationDuration={40}
          mobileAnimationDuration={40}
          prefix="testimonialOne"
        />

        <ContinuesSlider
          width={690}
          mobileWidth={690}
          gap={16}
          contents={linkedinTestimonials}
          animationDuration={40}
          mobileAnimationDuration={40}
          prefix="testimonialTwo"
          reverse={true}
        />
      </div>
    </section>
  );
}
