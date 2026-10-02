
import sec2Photo from "../assets/sec2.svg"

import check from "../assets/check.svg"
import sec3photo from "../assets/sec3.svg"
import arrow from "../assets/Arrow.svg"
import star from"../assets/Star.svg"

export default function Page()
{
    return(
        <div className=" flex flex-col gap-30">
{/* 2sec */}
       <div className="flex justify-center mt-30 ">
        <div className="w-3/4 flex gap-20 ">

        <img src={sec2Photo} className="w-[560px] rounded-[20px]"/>

        <div className="mt-[44px]">
            <h2 className="font-semibold text-[50px] leading-[130%] tracking-[-2px] font-martian text-[#062630] ">Read together, grow together </h2>
            <div className="flex flex-col gap-6 mt-[34px]">

            <div className="flex gap-[14px] w-3/4 items-center  font-normal">
                <img src={check}/>
                <p className=" font-inter leading-[140%] tracking-[-.5px] text-[20px] text-[#385159] ">Monthly curated tech reads selected by industry experts</p>
            </div>

             <div className="flex gap-[14px] w-3/4 items-center  font-normal">
                <img src={check}/>
                <p className=" font-inter leading-[140%] tracking-[-.5px] text-[20px] text-[#385159] ">Virtual and in-person meetups for deep-dive discussions</p>
            </div>


             <div className="flex gap-[14px] w-3/4 items-center  font-normal">
                <img src={check}/>
                <p className=" font-inter leading-[140%] tracking-[-.5px] text-[20px] text-[#385159] ">Early access to new tech book releases</p>
            </div>

             <div className="flex gap-[14px] w-3/4 items-center  font-normal">
                <img src={check}/>
                <p className=" font-inter leading-[140%] tracking-[-.5px] text-[20px] text-[#385159] ">Author Q&A sessions with tech thought leaders</p>
            </div>
            </div>
        </div>
        </div>
       </div>



       {/* 3rd sec */}
<div className="flex justify-center">
    <div className="w-3/4 flex items-center gap-20 ">
    <div className="flex flex-col gap-6">
        <h2 className="font-martian  font-[600] text-[50px] leading-[130%] tracking-[-2px]">Not your average book club</h2>
        <p className="font-inter text-[20px] leading-[140%] tracking-[-.5px] text-[#385159]">Connect with a community that speaks your language - <br/> from <span className="font-bold">Python</span>  to <span className="font-bold">TypeScript</span>  and everything in between. Our discussions blend technical depth with practical applications.</p>
    </div>
    <img src={sec3photo} className="rounded-[20px]"/>

    </div>

</div>


{/* sec4 */}

<div className=" flex justify-center">
    <div className="bg-[url(./assets/bg-pattern.svg)] w-3/4 pt-20 bg-[#FAF5F3] ">

    <h2 className="font-martian  font-semibold text-[50px] leading-[130%] tracking-[-2px] text-center text-[#062630] ">
        Your tech<br/> reading journey
    </h2>

    <div className="mt-20 flex pb-[70.01px] justify-center  ">
    <div className="w-35/39 flex gap-10 ">

        <div className="flex flex-col gap-5 ">
            {/* num */}
            <div className="flex justify-between">
            <div className="border-[2px] rounded-sm py-1 w-10 h-10 flex justify-center items-center font-martian font-semibold text-[18px] leading-[130%] tracking-[-1px] text-[#062630] ">
                1
            </div>

            <div>
                <img src={arrow}/>
            </div>
            </div>
            {/* sentence */}
            <p className="font-martian font-semibold text-[18px] leading-[130%] tracking-[-1px] text-[#062630] w-3/4">Choose your membership tier</p>


        </div>


         <div className="flex flex-col gap-5 ">
            {/* num */}
            <div className="flex justify-between">

            <div className="border-[2px] rounded-sm py-1 w-10 h-10 flex justify-center items-center font-martian font-semibold text-[18px] leading-[130%] tracking-[-1px] text-[#062630] ">
                2

            </div>
            <div>
                <img src={arrow}/>
            </div>
            </div>
            {/* sentence */}
            <p className="font-martian font-semibold text-[18px] leading-[130%] tracking-[-1px] text-[#062630] w-3/4">Get your monthly book selection</p>


        </div>



         <div className="flex flex-col gap-5 ">
            {/* num */}
            <div className="flex justify-between">
            <div className="border-[2px] rounded-sm py-1 w-10 h-10 flex justify-center items-center font-martian font-semibold text-[18px] leading-[130%] tracking-[-1px] text-[#062630] ">
                3

            </div>
            <div>
                <img src={arrow}/>
            </div>
            
            

            </div>
            {/* sentence */}
            <p className="font-martian font-semibold text-[18px] leading-[130%] tracking-[-1px] text-[#062630] ">Join our discussion forums</p>


        </div>



         <div className="flex flex-col gap-5 ">
            {/* num */}
            <div className="border-[2px] rounded-sm py-1 w-10 h-10 flex justify-center items-center font-martian font-semibold text-[18px] leading-[130%] tracking-[-1px] text-[#062630] ">
                4

            </div>
            {/* sentence */}
            <p className="font-martian font-semibold text-[18px] leading-[130%] tracking-[-1px] text-[#062630] ">Attend exclusive meetups</p>


        </div>
    </div>




    </div>

    </div>

</div>


{/* sec5 */}

<div className="flex justify-center" id="mentorship-options">
    <div className="w-3/4 flex flex-col gap-16">

    <h2 className="font-martian  font-semibold text-[50px] leading-[130%] tracking-[-2px] text-center text-[#062630]">
        Membership options
    </h2>
    {/* 3 cards */}

<div className="flex gap-6 items-center justify-center">
{/* card1 */}
<div className="flex flex-col gap-6 p-6 border-1 border-[#E6E1DF] w-[286px] rounded-lg">
    <h3 className="font-martian font-semibold text-[24px] tracking-[-1px] leading-[110.00000000000001%] text-[#062630]">Starter</h3>

    <div className="flex gap-2 items-center">
    <h2 className="font-martian font-semibold text-[34px] tracking-[-1px] leading-[130%] text-[#062630] ">$19 </h2>
    <h2 className="font-inter text-[20px] leading-[140%] tracking-[-.5px] text-[#385159] font-[400]">/month</h2>
    </div>
    <hr className="text-[#E6E1DF]"/>

    <div className="flex flex-col gap-4">
        <div className="flex gap-3">
        <img src={check} className="w-[24px]"/>
        <p className="font-inter text-[20px] leading-[140%] tracking-[-.5px] text-[#385159] font-[400]">1 book/month</p>

        </div>
        <div className="flex gap-3">
        <img src={check} className="w-[24px]"/>
        <p className="font-inter text-[20px] leading-[140%] tracking-[-.5px] text-[#385159] font-[400]">Online forums</p>

        </div>

    </div>
     <button className="font-martian font-semibold text-[18px] tracking-[-1px] leading-[130%] text-[#062630] rounded-[8px] border-2 py-5 px-6 border-[#062630] bg-[#FFF5EF]">SUBSCRIBE NOW</button>   




</div>

{/* card2 */}
<div className=" flex flex-col gap-6 w-[350px] py-10 px-6 border-1 border-[#E6E1DF] rounded-lg bg-[#FAF5F3]">
    <h3 className=" font-martian font-semibold text-[24px] tracking-[-1px] leading-[110.00000000000001%] text-[#062630]">Pro</h3>
     <div className="flex gap-2 items-center">
    <h2 className="font-martian font-semibold text-[34px] tracking-[-1px] leading-[130%] text-[#062630] ">$29 </h2>
    <h2 className="font-inter text-[20px] leading-[140%] tracking-[-.5px] text-[#385159] font-[400]">/month</h2>
    </div>
    <hr className="text-[#E6E1DF]"/>   
    <div className="flex flex-col gap-4">
        <div className="flex gap-3">
        <img src={check} className="w-[24px]"/>
        <p className="font-inter text-[20px] leading-[140%] tracking-[-.5px] text-[#385159] font-[400]">2 books/month</p>

        </div>
        <div className="flex gap-3">
        <img src={check} className="w-[24px]"/>
        <p className="font-inter text-[20px] leading-[140%] tracking-[-.5px] text-[#385159] font-[400]">Virtual meetups</p>

        </div>

    </div>
     <button className="font-martian font-semibold text-[18px] tracking-[-1px] leading-[130%] text-[#062630] rounded-[8px] border-2 py-5 px-6 border-[#062630] bg-[#FFF5EF]">SUBSCRIBE NOW</button>   

</div>

{/* card3 */}
<div className="flex flex-col gap-6 p-6 border-1 border-[#E6E1DF] w-[286px] rounded-lg">
    <h3 className="font-martian font-semibold text-[24px] tracking-[-1px] leading-[110.00000000000001%] text-[#062630]">Enterprise</h3>

   
    <h2 className="font-martian font-semibold text-[34px] tracking-[-1px] leading-[130%] text-[#062630] ">Custom </h2>

  
    <hr className="text-[#E6E1DF]"/>

    <div className="flex flex-col gap-4">
        <div className="flex gap-3">
        <img src={check} className="w-[24px]"/>
        <p className="font-inter text-[20px] leading-[140%] tracking-[-.5px] text-[#385159] font-[400]">Team access</p>

        </div>
        <div className="flex gap-3">
        <img src={check} className="w-[24px]"/>
        <p className="font-inter text-[20px] leading-[140%] tracking-[-.5px] text-[#385159] font-[400]">Private sessions</p>

        </div>

    </div>
     <button className="font-martian font-semibold text-[18px] tracking-[-1px] leading-[130%] text-[#062630] rounded-[8px] border-2 py-5 px-6 border-[#062630] bg-[#FFF5EF]">TALK TO US</button>   




</div>



</div>

    </div>

</div>



{/* sec6 */}
<div className="flex justify-center mb-30 ">
    <div className="flex flex-col gap-8 justify-center w-97/144 ">
        <div className="flex gap-[6px] justify-center">

        <img src={star}  className="w-7"/>
        <img src={star} className="w-7"/>
        <img src={star} className="w-7"/>
        <img src={star} className="w-7"/>
        <img src={star} className="w-7"/>
        </div>

        <p className="font-martian font-semibold text-[34px] tracking-[-1px] leading-[130%] text-[#062630] text-center">"This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"</p>

        <p className="font-inter text-[20px] leading-[140%] tracking-[-.5px] text-[#385159] font-[400] text-center">Sarah Chen, Software Architect</p>

    </div>

</div>


        </div>
    )
}