import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { toast } from "react-toastify";

const Product = ({ product, cart, setcart }) => {
  const [isBuyNow, setBoyNow] = useState(false);

  const handleBoyNow = () => {
    setBoyNow(true);
    

    const isFound = cart.find((item) => item.id === product.id);
    // console.log(isFound);

    if (isFound) {
      toast.error("Item already in cart");
      return;
    }

    setcart([...cart, product]);
    toast.success("Added to Product cart");
  };
  return (
    <div>
      <div className="w-[80%] mx-auto my-10">
        <div className="bg-[#F2F2F2] border-zinc-400 space-y-3 p-4 rounded-md">
          <div className="flex justify-between">
            <img src={product.img} alt="" />
            <div class="badge badge-warning font-bold">{product.tagType}</div>
          </div>
          <h2 className="text-2xl font-bold text-black">{product.name}</h2>
          <p className="text-[#627382]">{product.description}</p>
          <p className="text-black font-bold text-2xl">{product.price}/month</p>
          <p className="">{product.features}</p>
          <ul className="mb-5">
            {product.features.map((feature, i) => (
              <li className="flex gap-4  text-zinc-500" key={i}>
                {" "}
                <span className="text-green-600">
                  <IoMdCheckmark />
                </span>{" "}
                {feature}
              </li>
            ))}
          </ul>
          <div className="">
            <button
              onClick={handleBoyNow}
              className={`btn ${isBuyNow ? "bg-pink-400 text-black" :"bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}  rounded-full w-full text-white`}
            >
              {isBuyNow ? "Add to Cart" : "Boy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
