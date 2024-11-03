import React from "react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <div className="py-[120px] px-[20px]">
      <div className="flex flex-row justify-center">
        <div className="bg-slate-900 md:px-[70px] flex flex-col p-[20px] rounded shadow-2xl">
          <div className="flex flex-col gap-2 w-[275px] h-[350px] justify-center items-center">
            <Link to="/login">
              {" "}
              {/* <FaArrowLeft size={30} className="text-white" /> */}
            </Link>
            <h1 className="text-center text-slate-50 font-semibold text-[20px] capitalize mb-3">
              Reset Password
            </h1>
            <p className="text-white text-center">Enter your new password.</p>

            <form className="flex flex-col gap-4 mt-6">
              <input
                autoComplete="password"
                type="password"
                placeholder="Enter New Password"
                className="bg-white text-slate-800 p-3 rounded shadow w-[270px] outline-0 "
              />{" "}
              <input
                autoComplete="password"
                type="password"
                placeholder="Repeat New Password"
                className="bg-white text-slate-800 p-3 rounded shadow w-[270px] outline-0 "
              />{" "}
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded font-bold"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
