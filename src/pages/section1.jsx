import "../index.css";
import image from "../assets/Icon.svg";
import callimg from "../assets/Call to Action Text.svg";
import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import star from "../assets/Star.svg";
import heroimg from "../assets/Hero img.svg";

export default function Section1() {
  return (
    <section className=" bg-[url(./assets/bg-pattern.svg)] w-[100%]  bg-[#FAF5F3]  pb-[66px]">

      {/* cannot do it? */}
      {/* <div className="w-[684px] h-[684px] opacity-[40%] bg-[#9CC9DA] shadow-[200] absolute right-0 bottom-0">

      </div> */}
    <div className="pl-[calc((100%_-_1144px)_/_2)]">

      <nav className="flex gap-[5px] items-center pt-[35px] ">
        <img src={image} />
        <h2 className="font-fira text-[#062630] font-semibold text-[20px] leading-[100%] tracking-[-6%]">
          Tech Book Club
        </h2>
      </nav>
      </div>
      {/* other hings in section 1 */}

      <div className=" flex items-center gap-[64px] mt-20 justify-center">
        {/* left side */}
        <div className="w-[540px]">
          <h2 className="text-[62px] leading-[120%] tracking-[-2px] font-bold font-martian bg-linear-to-r from-[rgba(254,163,111,1)] to-[rgba(6,38,48,1)] bg-clip-text text-transparent mb-6">
            Join the ultimate tech book club
          </h2>
          <p className="font-[400] text-[20px] leading-[140%] tracking-[-.5px] font-inter mb-8">
            Turn your reading time into learning time with fellow tech
            enthusiasts. Get curated recommendations, join vibrant discussions,
            and level up your skills one chapter at a time.
          </p>

          {/* call to action */}
          <div className="flex  items-center gap-[19.96px] border border-2 border-[rgba(6, 38, 48, 1)] py-5 px-6 bg-[rgba(255, 245, 239, 1)]   rounded-[8px] w-[380px] mb-5">
            <a
              className="font-martian font-semibold text-[18px] leading-[130%] tracking-[-1px] "
              href="#mentorship-options"
            >
              REVIEW MEMBERSHIP OPTIONS
            </a>
            <img src={callimg} className="w-[14.96px] h-[16.82px] " />
          </div>

          {/* photos */}
        <div className="flex gap-3 items-center mt-5">
            <div className="flex w-30 relative">
              <img
                src={p1}
                className="w-10 rounded-full  border-2 border-white"
              />
              <img
                src={p2}
                className="w-10 rounded-full  border-2 border-white absolute left-8"
              />
              <img
                src={p3}
                className="w-10 rounded-full  border-2 border-white absolute left-16"
              />
            </div>
            {/* star */}
            <div className="flex flex-col gap-1">
              <div className="flex w-6 gap-[4.68px] ">
                <img src={star} className="w-full" />
                <img src={star} className="w-full" />
                <img src={star} className="w-full" />
                <img src={star} className="w-full" />
                <img src={star} className="w-full" />
              </div>
              <h4 className="text-[14px] leading-[120%] tracking-[-1px] font-martian  text-400">200+ developers joined already</h4>
            </div>
          </div>
    </div>
        {/* right side */}
        <div className="w-[540px] h-[606px]">
            <img src={heroimg} className="w-full h-full rounded-[16px]" />
        </div>
      </div>
    </section>
  );
}
