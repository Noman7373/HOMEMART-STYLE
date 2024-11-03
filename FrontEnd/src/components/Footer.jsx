import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import { BsArrowBarRight, BsGithub } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { LiaLinkedinIn, LiaLinkSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <>
      <div className="bg-slate-900 p-5">
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-slate-100 text-[25px]">Homedecor</h1>
            <p className="text-slate-200 flex text-[17px] pt-[20px] max-w-[400px] xs:max-[768px]:hidden lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h1 className="text-[20px] font-semibold mt-[15px] md-[10px] text-white">
              Connect with the developer
            </h1>
            <div className="flex flex-row gap-4 mb-[20px]">
              <a
                href="https://www.linkedin.com/in/noman7373/"
                target="_blank"
                className="rounded-full bg-white p-2"
              >
                <LiaLinkedinIn size={25} />
              </a>
              <a
                href="https://github.com/Noman7373"
                target="_blank"
                className="rounded-full bg-white p-2"
              >
                <BsGithub size={25} />
              </a>
              <a
                href="https://nomanprofile.netlify.app/"
                target="_blank"
                className="rounded-full bg-white p-2"
              >
                <BsArrowBarRight size={25} />
              </a>
            </div>
          </div>

          {/* info part */}
          <div className="flex flex-col p-1 gap-4">
            <h1 className="font-semibold text-white text-[25px]">Infomation</h1>
            <div className="flex gap-4 md:flex-col sm:flex-row xs:flex-col">
              <div className="flex gap-4 items-center">
                <span className="rounded-full p-2 bg-white">
                  <BiLocationPlus size={25} />
                </span>
                <p className="text-slate-300 text-[15px]">Muharraq Bahrain</p>
              </div>

              <div className="flex gap-4 items-center">
                <span className="rounded-full p-2 bg-white">
                  <IoCall size={25} />
                </span>
                <p className="text-slate-300 text-[15px]">+00000000</p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="rounded-full p-2 bg-white">
                  <MdEmail size={25} />
                </span>
                <p className="text-slate-300 text-[15px]">
                  Infohomedecor@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* home_Links */}

          <div className="flex flex-col gap-4">
            <h1 className="text-white font-semibold text-[25px]">
              Import Home Links
            </h1>
            <div className="flex gap-2 md:flex-col sm:flex-row">
              <Link
                to="/"
                className="text-white flex items-center gap-2 text-[20px] hover:text-slate-400"
              >
                <LiaLinkSolid size={25} /> Home
              </Link>
              <Link
                to="/about"
                className="text-white flex items-center gap-2 text-[20px] hover:text-slate-400"
              >
                <LiaLinkSolid size={25} /> About
              </Link>
              <Link
                to="/contact"
                className="text-white flex items-center gap-2 text-[20px] hover:text-slate-400"
              >
                <LiaLinkSolid size={25} /> Contact
              </Link>
            </div>
          </div>

          {/* News Letter */}

          <div className="flex flex-col text-white">
            <h1 className="font-semibold text-[25px]">News Letter</h1>
            <p className="text-slate-200 text-[17px] pt-[20px] max-w-[400px]">
              Get notified of all our premium discounts and promos. We will also
              notify you from time to time when we make updates to serve you
              better.
            </p>
            <div className="bg-white flex flex-col md:flex-row xs:p-2 xs:justify-start xs:items-start xs:gap-2 md:justify-between md:items-center p-4 rounded-lg mt-[20px] ">
              <p className="text-slate-800 font-semibold">
                officialnomanahmed@gmail.com
              </p>
              <Link to="/contact">
                <button className="bg-black text-white p-2 rounded-lg hover:bg-green-400">
                  Connect
                </button>
              </Link>
            </div>
          </div>
        </div>

        <hr className="text-white xs:mt-4" />

        <div className="flex md:flex-row flex-col gap-3 items-center justify-around mt-[20px]">
          <p className="text-slate-400 flex flex-row items-center gap-1 text-[12px] md:text-[18px]">
            Website build out of{" "}
            <span>
              <FaHeart className="text-pink-600" />
            </span>{" "}
            by <span className="text-white italic font-bold">NOMAN AHMED</span>
          </p>

          <p className="md:text-[20px] text-[15px] text-slate-400">
            © Homedecor 2024
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
