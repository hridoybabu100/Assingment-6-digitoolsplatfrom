import React from 'react';
import UserImg from "../../assets/user.png"
import ProductImg from "../../assets/package.png"
import RocketImg from "../../assets/rocket.png"


const GetStep = () => {
    return (
        <div className='bg-[#F9FAFC]'>

            <div className='text-center pt-10 pb-8'>
                <h1 className='text-[48px] text-[#101727] font-bold'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex justify-between items-center gap-6 max-w-[80%] mx-auto pb-15'>

                <div className='bg-[#FFFFFF] p-8 shadow-md text-center space-y-2 rounded-xl'>
                    <img className='mx-auto' src={UserImg} alt="" />
                    <h2 className='text-2xl font-bold '>Create Account</h2>
                    <p>Sign up for free in seconds. No credit <br />card required to  get started.</p>
                </div>
                <div className='bg-[#FFFFFF] p-8 shadow-md text-center space-y-2 rounded-xl'>
                    <img className='mx-auto' src={ProductImg} alt="" />
                    <h2 className='text-2xl font-bold '>Choose Products</h2>
                    <p>Browse our catalog and select the tools <br />that fit your needs.</p>
                </div>
                <div className='bg-[#FFFFFF] p-8 shadow-md text-center space-y-2 rounded-xl'>
                    <img className='mx-auto' src={RocketImg} alt="" />
                    <h2 className='text-2xl font-bold '>Start Creating</h2>
                    <p>Download and start using your premium <br />tools immediately.</p>
                </div>

            </div>
            
        </div>
    );
};

export default GetStep;