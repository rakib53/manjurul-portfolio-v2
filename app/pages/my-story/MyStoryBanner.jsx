export default function MyStoryBanner() {
  return (
    <section className="w-full max-w-[1440px] mx-auto">
      <div className="bg-[url('/header.png')] bg-no-repeat bg-cover bg-center rounded-xl py-[170px]">
        <div className="flex flex-col gap-6">
          {/* Behind the Screens */}
          <div className="flex justify-center">
            <span className="inline-block py-[18px] px-[25px] text-center bg-[#173E34] rounded-full font-rocGroteskMid text-xl tracking-[-0.4px]">
              Behind the Screens
            </span>
          </div>

          <div className="w-full flex flex-col">
            <h1 className="text-[#F7F6EF] font-rocGroteskReg text-[54px] text-center">
              My{" "}
              <strong className="text-[#B9F49B] font-rocGroteskBold">
                journey
              </strong>{" "}
              to becoming a product <br /> designer, along with my
              <strong className="text-[#B9F49B] font-rocGroteskBold">
                activities{" "}
              </strong>{" "}
              & work.
            </h1>
            <p className="text-[21px] text-center leading-[64px] tracking-[-0.655px] font-rocGroteskReg text-[#FFFFFFB2]">
              Exploring my growth and the milestones that shaped my design
              career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
