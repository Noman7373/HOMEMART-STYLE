import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

const ForgotSuccess = () => {
  return (
    <div className="py-[120px] px-[20px]">
      <div className="flex flex-row justify-center">
        <div className="bg-slate-900 md:px-[70px] flex flex-col p-[20px] rounded shadow-2xl">
          <div className="flex flex-col gap-4 w-[275px] h-[300px] justify-center items-center">
            <HiBadgeCheck size={30} className="text-blue-500" />
            <h1 className="text-center text-slate-50 font-semibold text-[20px] capitalize mb-3">
              Successfully Sent
            </h1>
            <p className="text-white text-center">
              We have sent instructions on how to reset your password to
              officialnoman73@gmail.com Please follow the instructions from the
              email.We hava sent on an email verification to.....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotSuccess;
