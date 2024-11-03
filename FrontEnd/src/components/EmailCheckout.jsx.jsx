import React from "react";
import userAuth from "../customHook/userAuth";
import { Link } from "react-router-dom";

const EmailCheckout = () => {
  const { Email } = userAuth();
  return (
    <>
      <div className="flex flex-col gap-4 p-4 pl-4 border border-gray-400  rounded">
        <h2 className="md:text-[20px]">Hi there, Start Your Checkout here.</h2>
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
