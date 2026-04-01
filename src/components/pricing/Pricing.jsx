import React from "react";
import PricingImg from "../../assets/Vector.png"

const Pricing = () => {
  return (
    <div className=" max-w-[96%] lg:max-w-[80%] mx-auto">
      <div className="text-center pt-10 pb-8">
        <h1 className="text-[48px] font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Simple, Transparent Pricing
        </h1>
        <p>
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-15">

        <div className="bg-[#F2F2F2] p-8 shadow-md space-y-2 rounded-xl">
          <h2 className="text-2xl font-bold ">Starter</h2>
          <p className="text-[#627382]">
            Perfect for getting started
          </p>
          <p className="text-[#627382] text-[20px]">
            {" "}
            <span className="text-2xl font-bold text-black">$0</span>/month
          </p>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="text-[#627382]">Access to 10 free tools</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="text-[#627382]">Basic templates</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="text-[#627382]">Community support</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="text-[#627382]">1 project per month</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="text-[#627382]">Get Started Free</p>
          </div>
          
          <div>
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold w-full">
              Get Started Free
            </button>
          </div>
        </div>
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-8 text-white shadow-md space-y-2 rounded-xl">
          <h2 className="text-2xl font-bold ">Starter</h2>
          <p className="">
            Perfect for getting started
          </p>
          <p className=" text-[20px]">
            {" "}
            <span className="text-2xl font-bold text-black">$0</span>/month
          </p>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="">Access to 10 free tools</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="">Basic templates</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="">Community support</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="">1 project per month</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="">Get Started Free</p>
          </div>
          
          <div>
            <button className="btn  text-black bg-white font-bold w-full">
              Get Started Free
            </button>
          </div>
        </div>
        <div className="bg-[#F2F2F2] p-8 shadow-md space-y-2 rounded-xl">
          <h2 className="text-2xl font-bold ">Starter</h2>
          <p className="text-[#627382]">
            Perfect for getting started
          </p>
          <p className="text-[#627382] text-[20px]">
            {" "}
            <span className="text-2xl font-bold text-black">$0</span>/month
          </p>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="text-[#627382]">Access to 10 free tools</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="text-[#627382]">Basic templates</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="text-[#627382]">Community support</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="text-[#627382]">1 project per month</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-3 h-3" src={PricingImg} alt="" />
          <p className="text-[#627382]">Get Started Free</p>
          </div>
          
          <div>
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold w-full">
              Get Started Free
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
