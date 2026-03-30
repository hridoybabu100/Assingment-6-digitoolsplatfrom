import React from "react";
import HeroImg from "../../../assets/banner.png";
import BadgeImg from "../../../assets/Group 5.png";

const Banner = () => {
  return (
    <div className="max-w-[80%] mx-auto">
      <div className="h">
        <div className="hero-content justify-between items-center flex-col lg:flex-row-reverse my-15">
          <img src={HeroImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-3">
            <button className="btn rounded-full text-[#9514FA] bg-[#E1E7FF]">
              {" "}
              <img src={BadgeImg} alt="" /> New: AI-Powered Tools Available
            </button>
            <h1 className="text-[72px] font-bold">
              Supercharge Your <br />
              Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates,  and
              productivity <br /> software—all in one place. Start creating faster
              <today className="br"></today> Explore Products
            </p>
            <div className="flex gap-1">
              <button className="btn btn-primary rounded-full">
                Get Started
              </button>
              <button className="btn outline rounded-full">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
