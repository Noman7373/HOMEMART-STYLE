import React from "react";
import userAuth from "../customHook/userAuth";

const EmailCheckout = () => {
  const { Email } = userAuth();
  return (
    <>
      <h2 className="md:text-[20px] ">Hi there, Start Your Checkout here.</h2>
      <div className="flex flex-col p-4 border border-gray-400">
        <label htmlFor="email" className="font-bold">
          Email:
        </label>
        <input
          name="email"
          id="email"
          readOnly
          type="text"
          placeholder={Email}
          className="outline-0 bg-[#FAFAFA] text-black text-[15px]"
        />
      </div>
    </>
  );
};

export default EmailCheckout;
