import Container from "@components/Container";
import certificate1 from "@public/certificates/1.png";
import certificate2 from "@public/certificates/2.png";
import certificate3 from "@public/certificates/3.png";
import certificate4 from "@public/certificates/4.png";
import Image from "next/image";

export default function MyCertifications() {
  return (
    <section className="py-[80px]">
      <div className="mb-[56px]">
        <h2 className="sectionTitle">My certifications</h2>
        <p className="sectionDesc">
          Showcasing the milestones that shaped my success.
        </p>
      </div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className="w-full rounded-xl overflow-hidden"
            style={{
              boxShadow:
                "0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
            }}
          >
            <Image src={certificate1} alt="" />
          </div>

          <div
            className="w-full rounded-xl overflow-hidden"
            style={{
              boxShadow:
                "0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
            }}
          >
            <Image src={certificate2} alt="" />
          </div>
          <div
            className="w-full rounded-xl overflow-hidden"
            style={{
              boxShadow:
                "0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
            }}
          >
            <Image src={certificate3} alt="" />
          </div>
          <div
            className="w-full rounded-xl overflow-hidden"
            style={{
              boxShadow:
                "0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
            }}
          >
            <Image src={certificate4} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}
