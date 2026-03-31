import React from 'react';

const Product = ({product}) => {
    return (
        <div>
            <div className="w-[80%] mx-auto my-10">
            <div className="bg-[#F2F2F2] border-zinc-400 space-y-3 p-4 rounded-md">
              <img src={product.img} alt="" />
              <h2 className='text-2xl font-bold text-black'>{product.name}</h2>
              <p className='text-[#627382]'>{product.description}</p>
              <p className='text-black font-bold text-2xl'>{product.price}/month</p>
              <p className='text-black font-bold text-2xl'>{product.price}/month</p>
              <p className=''>{product.features}</p>
              <div className=''>
                <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full text-white'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Product;