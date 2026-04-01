import React from "react";

const Ready = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10">
      <div className="text-center pt-10 pb-8 space-y-3">
        <h1 className="text-white text-3xl lg:text-[48px] font-bold">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-white text-[15px]">
          Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.
        </p>
        <div className="flex gap-1 justify-center items-center">
            <button className="btn rounded-full ">Explore Products</button>
            <button className="btn rounded-full">View Pricing</button>
        </div>
        <p className="text-white text-[15px]">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Ready;
