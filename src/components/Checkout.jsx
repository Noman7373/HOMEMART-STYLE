import React from "react";

import { IoIosArrowDown } from "react-icons/io";

const Checkout = () => {
  return (
    <>
      <div className="w-full flex flex-col mx-auto h-[1048px] md:flex-row">
        <div className="px-5 flex flex-col pt-5 md:w-[720px]">
          <div className="flex flex-col gap-6">
            <h1 className="uppercase text-[20px] font-bold">Homemart Style</h1>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-black md:text-[18px] xs:text-[15px]">
                1:Email Address
              </p>
              <p className="font-semibold text-black md:text-[18px] xs:text-[15px]">
                2:Shipping Address
              </p>
              <p className="font-semibold text-black md:text-[18px] xs:text-[15px]">
                3:Payment
              </p>
            </div>

            <h2 className="md:text-[20px] ">
              Hi there, Start Your Checkout here.
            </h2>
            <div className="flex flex-col p-4 border border-gray-400">
              <label htmlFor="email" className="font-bold">
                Email:
              </label>
              <input
                name="email"
                id="email"
                readOnly
                type="text"
                placeholder="nk2618@gmail.com"
                className="outline-0 bg-[#FAFAFA] text-black text-[15px]"
              />
            </div>
            <button className="px-4 py-3 text-white bg-black rounded hover:bg-gray-500 max-w-52">
              Proceed To Shipping
            </button>
          </div>
        </div>
        <div className="bg-[#F1F5F9] relative h-full w-[560px]">
          <div className="flex flex-col h-full pt-4 px-5">
            <div className="flex flex-col bg-white p-4 rounded cursor-pointer">
              <div className="flex justify-between">
                <h1 className="text-[20px] font-bold">Your Cart</h1>
                <p className="font-bold flex items-center gap-3">Items <IoIosArrowDown size={25} /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
