import "../index.css";
import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import star from "../assets/Star.svg";

import arrow from "../assets/abovearrow.svg"

export default function Footer() {
  return (
    <section className=" bg-[#062630] w-[100%]   pt-[80px]">
      {/* other hings in section 1 */}

      <div className=" flex justify-center">
       

        <div className="w-1/2 flex items-center flex-col">
          <h2 className="text-[62px] leading-[120%] text-center tracking-[-2px] font-bold font-martian text-white  mb-10">
            Ready to debug your reading list?
          </h2>

          {/* call to action */}
          <div className="flex justify-center items-center gap-[19.96px] border border-2 border-white py-5 px-6 bg-[rgba(255, 245, 239, 1)]   rounded-[8px] w-[380px] mb-5">
            <a
              className="font-martian font-semibold text-[18px] leading-[130%] text-white tracking-[-1px] "
              href="#mentorship-options"
            >
              REVIEW MEMBERSHIP OPTIONS
            </a>
            <img src={arrow} className="w-[14.96px] h-[16.82px] " />
          </div>

          {/* photos */}
          <div className="flex gap-3 items-center mt-5 mb-[134px]">
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
              <h4 className="text-[14px] leading-[120%] tracking-[-1px] font-martian text-white  text-400">
                200+ developers joined already
              </h4>
            </div>
          </div>

          {/* ending  */}
          {/* need fontawesome */}
         
        </div>
        </div>

    
    </section>
  );
}
