import React from "react";
import HeroImg from "../../../assets/banner.png";
import BadgeImg from "../../../assets/Group 5.png";

const Banner = () => {
  return (
    <div className="lg:max-w-[80%] max-w-[96%] mx-auto">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:flex justify-between my-20">
          <div className="space-y-3 text-center lg:text-left">
            <button className="btn rounded-full text-[#9514FA] bg-[#E1E7FF]">
              {" "}
              <img src={BadgeImg} alt="" /> New: AI-Powered Tools Available
            </button>
            <h1 className=" text-4xl lg:text-[72px] font-bold text-center lg:text-left">
              Supercharge Your <br />
              Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster
              <today className="br"></today> Explore Products
            </p>
            <div className="flex gap-1 justify-center lg:justify-normal">
              <button className="btn btn-primary rounded-full">
                Get Started
              </button>
              <button className="btn outline rounded-full">Get Started</button>
            </div>
          </div>

          <img src={HeroImg} className="lg:max-w-sm w-[80%] mx-auto rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
