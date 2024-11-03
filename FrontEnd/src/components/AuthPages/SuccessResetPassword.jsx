import React from "react";
import { Link } from "react-router-dom";

const SuccessResetPassword = () => {
  return (
    <div className="py-[120px] px-[20px]">
      <div className="flex flex-row justify-center">
        <div className="bg-slate-900 md:px-[70px] flex h-[200px] flex-col p-[20px] rounded shadow-2xl">
          <div className="flex flex-col gap-2 w-[275px] h-full  justify-center items-center">
            <h1 className="text-center text-slate-50 font-semibold text-[20px] capitalize mb-3">
              Password Reset Done
            </h1>
            <p className="text-white text-center">
              Now you can access your account.
            </p>
          </div>
          <Link to="/login">
            <button className="bg-green-500 w-full text-white p-2 rounded font-bold">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessResetPassword;
