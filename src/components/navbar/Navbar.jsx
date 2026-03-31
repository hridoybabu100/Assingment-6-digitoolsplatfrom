import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({cart}) => {
  return (
    <div className="py-10 shadow-b flex justify-between items-center max-w-[80%] mx-auto">
      <div className="">
        <a className="btn btn-ghost text-xl text-[#4F39F6]">Digitools</a>
      </div>

      <div className=" flex items-center gap-5">
        <ul>
          <li>
            <a href="#"></a>Products
          </li>
        </ul>
        <ul>
          <li>
            <a href="#"></a>Pricing
          </li>
        </ul>
        <ul>
          <li>
            <a href="#"></a>Features
          </li>
        </ul>
        <ul>
          <li>
            <a href="#"></a>Testimonials
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <p>FAQ</p>
        <div>
           
           
           <button className='relative'>
                    <CiShoppingCart size={22}/>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">{cart.length}</span>
                   
                </button>
        </div>
        <div>
          <p>Login</p>
        </div>
        <div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-[#FFFFFF] font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
