import ContinuesSlider from "app/components/ContinuesSlider/ContinuesSlider";

const linkedinTestimonials = [
  {
    description:
      "I am writing to highly recommend Md Manjurul Islam for any future UI/UX design opportunities. I had the pleasure of working closely with Manjurul during our recent project, where he served as the UI/UX designer.  Manjurul consistently impressed me with his exceptional design skills and innovative approach to user interface and experience. His attention to detail, creativity, and ability to translate complex concepts into user-friendly designs significantly contributed to the project's success.  As the project lead, I appreciated Manjurul's collaborative nature and his commitment to meeting deadlines. He demonstrated excellent communication skills, ensuring a smooth flow of information between the design team and other project stakeholders.  In addition to his technical expertise, Manjurul's positive attitude and dedication to producing high-quality work make him an asset to any team. I am confident that he would excel in any design role and bring a valuable perspective to any project.",
    name: "Khandoker Kafi Anan",
    company: "Pink Decoder",
    title: "Product Developer",
    profile:
      "https://media.licdn.com/dms/image/D5603AQGQKsNmJnzMwQ/profile-displayphoto-shrink_100_100/0/1711799973661?e=1722470400&v=beta&t=7jEEtVfpiDQAJvEBjS81_McCZ5qQ0dyCgq_VU3hPCis",
  },
  {
    description:
      "I had the pleasure of working with Manjurul as a UI/UX Designer. His enthusiasm for learning and a strong sense of design made him a valuable team member. Manjurul's attention to detail and creative problem-solving significantly improved our projects. I highly recommend him for his dedication and skill in UI/UX design.",
    name: "Nazmul Haque shanto",
    company: "MyAlice",
    title: "UI/UX Designer",
    profile:
      "https://media.licdn.com/dms/image/D5603AQGODh81EyiRMg/profile-displayphoto-shrink_100_100/0/1698227611303?e=1722470400&v=beta&t=Te2CVBYduuHypAusATewBkgrSpOJ5gEl4ifXZFPCqEk",
  },
  {
    description:
      "It is my pleasure to wholeheartedly recommend Md Manjurul Islam based on our collaborative experience. I had the privilege of working closely with Manjurul on multiple projects/ideas and his prowess in UI/UX design left an indelible mark on our project.  Manjurul possesses an exceptional blend of creativity and dedication, consistently delivering designs that seamlessly merge innovation with practicality. His attention to detail is unparalleled, and the quality of his work consistently surpassed our expectations.  Throughout our collaboration, Manjurul demonstrated a profound understanding of user experience principles, translating intricate concepts into visually captivating and user-friendly designs. What sets Manjurul apart is not just his technical proficiency but also his effective communication and collaboration skills. Always open to feedback, he promptly incorporated changes, ensuring that our final product not only met but exceeded both client requirements and end-users' expectations.  Beyond his technical acumen, Manjurul is a joy to work with. His positive attitude, strong work ethic, and commitment to staying abreast of the latest design trends and technologies make him an invaluable asset to any team.  In conclusion, I highly recommend Md Manjurul Islam for his outstanding UI/UX design skills. His passion for excellence and collaborative approach make him an ideal choice for any project. Feel free to reach out if you require additional information or have any questions.",
    name: "Sabuj kundu",
    company: "Codeboxr",
    title: "Founder & CEO",
    profile:
      "https://media.licdn.com/dms/image/D4E03AQGFDNX4Q_i5aw/profile-displayphoto-shrink_100_100/0/1639717468588?e=1722470400&v=beta&t=e_16c5bXKE5Y8mDVPYv8SyDtlMfwPU8oKB-AkStgzAc",
  },
  {
    description:
      "I had the pleasure of studying with Md Manjurul Islam on the Bangladesh Learning and Earning Development Project where he get strong skills and attention to detail. Md Manjurul Islam was great knowledge about problem-solving and take quick decisions. We are together doing several assignments for our internship. I would highly recommend him to anyone looking for a reliable and skilled UI/UX Designer.",
    name: "Md. Tohiduzzman",
    company: "Upwork",
    title: "Expert in Banner Ads Design",
    profile:
      "https://media.licdn.com/dms/image/D4E35AQGpEIX7YoRUEg/profile-framedphoto-shrink_100_100/0/1700496683396?e=1717740000&v=beta&t=BxcCfrg18FsE2VT077PhkM_0JffGmNnPNxJlqJqdWpY",
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
          gap={16}
          contents={linkedinTestimonials}
          animationDuration={30}
          prefix="testimonialOne"
        />

        <ContinuesSlider
          width={690}
          gap={16}
          contents={linkedinTestimonials}
          animationDuration={30}
          prefix="testimonialTwo"
          reverse={true}
        />
      </div>
    </section>
  );
}
