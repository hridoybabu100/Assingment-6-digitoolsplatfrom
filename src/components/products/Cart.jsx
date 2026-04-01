import React from "react";
import { toast } from "react-toastify";
import { CiShoppingCart } from "react-icons/ci";

const Cart = ({ cart, setcart }) => {
  //   console.log(cart);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(totalPrice);

  const handleCatrs = () => {
    setcart([]);
    toast.success("Payment Successfull");
  };

  const handleDelete = (item) => {
    // console.log(item);
    const filterArray = cart.filter((i) => i.id !== item.id);
    // console.log(filterArray);
    setcart(filterArray);
    toast.success("Item Deleted!");
  };

  return (
    <div className="lg:w-[80%] w-[96%] mx-auto">
      {cart.length === 0 ? (
        <>
          <div className="space-y-1 py-4 my-10 bg-zinc-200 rounded-2xl">
            <div className="mx-auto">
              <CiShoppingCart className="h-40 w-40 mx-auto"/>
            </div>
            <p className="text-3xl font-bold text-center">
              Your card is empty!!
            </p>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-black my-6">Your Cart </h1>
          <div className="space-y-5 mb-10">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-zinc-300 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{item.name}</h1>
                    <h1 className="font-bold pt-2">${item.price}</h1>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn text-red-600 rounded-full"
                >
                  Delete
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center bg-zinc-300 rounded-2xl p-6">
              <h1 className="font-bold text-2xl text-black">Total</h1>
              <span className="text-black font-bold text-2xl">
                $<span>{totalPrice}</span>
              </span>
            </div>
            <div>
              <button
                onClick={handleCatrs}
                className="btn p-6 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl text-white font-bold"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
