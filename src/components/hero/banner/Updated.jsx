import React from 'react';

const Updated = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] '>
            <div className='flex justify-between items-center gap-7 max-w-[60%] mx-auto mb-15'>
                <div className='space-y-1 py-3'>
                    <h1 className='text-[50px] font-bold text-white'><span>50</span>K+</h1>
                    <p className='text-white'>Active Users</p>
                </div>
                <div className='space-y-1 py-3'>
                    <h1 className='text-[50px] font-bold text-white'><span>200</span>+</h1>
                    <p className='text-white'>Premium Tools</p>
                </div>
                <div className='space-y-1 py-3'>
                    <h1 className='text-[50px] font-bold text-white'><span>4.9</span></h1>
                    <p className='text-white'>Rating</p>
                </div>
                
            </div>
        </div>
    );
};

export default Updated;