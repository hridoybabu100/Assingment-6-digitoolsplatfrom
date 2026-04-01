import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <footer className="w-[96%] lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10  py-10">
          <div className="flex text-center lg:text-left flex-col gap-2 text-white">
            <h6 className="footer-title text-4xl bg-linear-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent font-bold">
              Digitools
            </h6>
            <a className="link link-hover">
              Premium digital tools for creators, professionals,
              <br /> and businesses. Work smarter <br /> with our suite of
              powerful tools.
            </a>
          </div>

          <div className="flex text-center lg:text-left flex-col gap-1 text-white">
            <h6 className="footer-title">Product</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </div>

          <div className="flex text-center lg:text-left flex-col gap-2 text-white">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </div>

          <div className="flex text-center lg:text-left flex-col gap-2 text-white">
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-white font-bold text-2xl pb-2">Social Media</h1>
            <div className="flex gap-3 text-center items-center justify-center lg:justify-normal">
              <ul className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                <li className="text-black">
                  <FaFacebook />
                </li>
              </ul>
              <ul className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                <li className="text-black">
                  <LuInstagram />
                </li>
              </ul>
              <ul className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                <li className="text-black">
                  <FaTwitter />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" border-t text-white flex sm:flex-row flex-col text-center items-center justify-between py-6 ">
          <h1 className="">© 2026 Digitools. All rights reserved.</h1>
          <div className="lg:flex items-center gap-5 text-white hidden">
            <span> Privacy Policy </span> <span>Terms of Service </span>{" "}
            <span>Cookies</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
