import Container from "@components/Container";

export default function EducationalExperience() {
  return (
    <section className="w-full px-6 my-3">
      <div className="bg-white py-[100px] rounded-xl">
        <Container>
          <div className="flex justify-between">
            <div>
              <h3 className="sectionTitle !text-left">
                Educational Background
              </h3>
              <p className="sectionDesc !text-left">
                A showcase of my educational journey and learning growth.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <span className="block w-full h-[1px] bg-[#D0D5DD] my-14"></span>
              <div className="flex justify-between items-center mb-[28px]">
                <div>
                  <h1 className="text-[40px] tracking-[-1.2px] font-rocGroteskMid text-[#667085]">
                    Bachelor of science -{" "}
                    <strong className="text-[#101828]">
                      Political Science
                    </strong>
                  </h1>
                  <span className="text-[#344054] text-2xl font-normal tracking-[-0.72px] leading-[31px] font-rocGroteskReg opacity-[0.6]">
                    National university, Bangladesh
                  </span>
                </div>
                <div>
                  <span className="text-[#949493] font-base font-medium font-rocGroteskMid">
                    Jul 2021 - Jun 2024
                  </span>
                </div>
              </div>
              <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px]">
                <span>
                  National University is one of the leading educational
                  institutions in Bangladesh, offering comprehensive academic
                  programs. As a graduate, my key accomplishments and
                  experiences include:
                  <br />
                  <br />
                </span>
                <ul>
                  <li>
                    ✦ Completing a rigorous academic curriculum focused on
                    Political Science.
                  </li>
                  <li>
                    ✦ Engaging in extracurricular activities that honed my
                    leadership, teamwork, and problem-solving skills.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <span className="block w-full h-[1px] bg-[#D0D5DD] my-14"></span>
              <div className="flex justify-between items-center mb-[28px]">
                <div>
                  <h1 className="text-[40px] tracking-[-1.2px] font-rocGroteskMid text-[#667085]">
                    Higher secondary school certificate -{" "}
                    <strong className="text-[#101828]">Science</strong>
                  </h1>
                  <span className="text-[#344054] text-2xl font-normal tracking-[-0.72px] leading-[31px] font-rocGroteskReg opacity-[0.6]">
                    Cantonment College, Jashore.
                  </span>
                </div>
                <div>
                  <span className="text-[#949493] font-base font-medium font-rocGroteskMid">
                    Jun 2017 - Jun 2019
                  </span>
                </div>
              </div>
              <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px]">
                <span>
                  Cantonment College, Jashore, established in 1969 in Arabpur,
                  Jashore, is a prestigious institution regulated by the
                  cantonment board and the Bangladesh Army. With 3,500 students
                  and 80 teachers, it is renowned for academic excellence:
                  <br />
                  <br />
                </span>
                <ul>
                  <li>
                    ✦ Building a strong foundation in core science subjects such
                    as Physics, Chemistry, and Mathematics.
                  </li>
                  <li>
                    ✦ Actively participating in co-curricular activities to
                    enhance critical thinking and teamwork skills.
                  </li>
                  <li>
                    ✦ Successfully completing the HSC curriculum with
                    distinction and dedication.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <span className="block w-full h-[1px] bg-[#D0D5DD] my-14"></span>
              <div className="flex justify-between items-center mb-[28px]">
                <div>
                  <h1 className="text-[40px] tracking-[-1.2px] font-rocGroteskMid text-[#667085]">
                    Secondary school certificate -{" "}
                    <strong className="text-[#101828]">Science</strong>
                  </h1>
                  <span className="text-[#344054] text-2xl font-normal tracking-[-0.72px] leading-[31px] font-rocGroteskReg opacity-[0.6]">
                    Nakipur H.C Pilot Model GOVT High School
                  </span>
                </div>
                <div>
                  <span className="text-[#949493] font-base font-medium font-rocGroteskMid">
                    Jan 2015 - Dec 2017
                  </span>
                </div>
              </div>
              <div className="text-[#344054] text-xl leading-[31px] tracking-[-0.6px]">
                <span>
                  Nakipur H.C. Pilot Model Govt. High School is one of the
                  oldest and most prestigious educational institutions in the
                  Satkhira district, established in 1899 by Hari Charan Roy. As
                  a proud alumnus, my key experiences and achievements include:
                  <br />
                  <br />
                </span>
                <ul>
                  <li>
                    ✦ Successfully completing my Secondary School Certificate
                    with a strong foundation in science.
                  </li>
                  <li>
                    ✦ Actively participating in extracurricular activities, e.g.
                    school debates, sports, cultural programs.
                  </li>
                  <li>
                    ✦ Developing essential skills like discipline, teamwork, and
                    leadership during my time at this historic institution.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
