import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <div className="py-[120px] px-[20px]">
      <div className="flex flex-row justify-center">
        <div className="bg-slate-900 md:px-[70px] flex flex-col p-[20px] rounded shadow-2xl">
          <div className="flex flex-col gap-2 w-[275px] h-[350px] justify-center items-center">
            <Link to="/login">
              {" "}
              <FaArrowLeft size={30} className="text-white" />
            </Link>
            <h1 className="text-center text-slate-50 font-semibold text-[20px] capitalize mb-3">
              Forgot Password
            </h1>
            <p className="text-white text-center">
              Enter your email address for which account you want to reset your
              password.
            </p>

            <form className="flex flex-col gap-4 mt-6">
              <input
                autoComplete="email"
                type="email"
                placeholder="officialnomanahmed@gamilcom"
                className="bg-white text-slate-800 p-3 rounded shadow w-[270px] outline-0 "
              />{" "}
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded font-bold"
              >
                Verify Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
