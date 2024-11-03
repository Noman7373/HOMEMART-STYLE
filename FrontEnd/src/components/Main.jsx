import React, { useEffect } from "react";
import mainImage from "../assets/furniture1.avif";
import paymentLogo from "../assets/cardr.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsPaypal } from "react-icons/bs";
import { RiQuestionAnswerLine } from "react-icons/ri";
import Newarrival from "./Newarrival";
import Bestsellers from "./Bestsellers";
import { Link } from "react-router-dom";


const Main = () => {
 
  return (
    <>
      <div className="px-[20px] overflow-x-hidden pt-[150px] pb-[30px]">
        <div className="flex flex-col gap-[10px] mt-4 justify-between md:flex-row items-center">
          <div className="flex flex-col gap-4 max-w-[600px] p-4">
            <h1
              className="text-[30px] md:text-[50px] font-bold"
            >
              Home of quality furniture
            </h1>
            <p className="text-slate-700 text-[20px] md:text-[27px]">
              Welcome to HomeStyle Mart , your one-stop shop for stylish
              furniture and home decor
            </p>
            <div className="flex gap-4">
              <Link to="/bedroom">
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-green-500">
                  Explore
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-slate-400 text-white py-2 px-4 rounded-lg hover:bg-green-500">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="pt-4 max-w-[350px] sm:max-w-[500px] md:w-full">
            <img src={mainImage} alt="home-image" />
          </div>
        </div>
        <div className="hidden flex-wrap md:hidden lg:flex justify-center items-center w-full gap-6 mt-12 p-2 px-[20px]">
          <div
           
            className="flex flex-col justify-center items-center gap-2 max-w-[300px] border shadow-2xl rounded-lg text-center p-5"
          >
            <span className="rounded-full flex items-center justify-center p-2 bg-black">
              <CiDeliveryTruck size={30} color="white" />
            </span>
            <h2 className="px-6 text-[30px] md:text-[27px]">
              Fast and free shipping
            </h2>
            <p className="text-[25px] md:text-[17px]">
              Every single product are shipped for free, no minimium, no fine
              print or whatever.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 max-w-[300px] border shadow-2xl rounded-lg text-center p-5">
            <span className="rounded-full flex items-center justify-center p-2 bg-black">
              <BsPaypal size={30} color="white" />
            </span>
            <h2 className="px-6 text-[30px] md:text-[27px]">Secured Payment</h2>
            <p className="text-[25px] md:text-[17px]">
              Our payment method is very easy and self explainatory to the
              extent that anybody can make payment without mistake.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 max-w-[300px] border shadow-2xl rounded-lg text-center p-5">
            <span className="rounded-full flex items-center justify-center p-2 bg-black">
              <RiQuestionAnswerLine size={30} color="white" />
            </span>
            <h2 className="px-6 text-[30px] md:text-[27px]">
              Quality Material
            </h2>
            <p className="text-[25px] md:text-[17px]">
              We use premium material sustainably forested wood, strengthen
              steel hardware and top-grain
            </p>
          </div>
        </div>

        {/* // IMPORT THE NEW ARRIVAL COMPONENT */}
        <Newarrival />
        {/* // IMPORT THE BEST SELLER COMPONENT */}
        <Bestsellers />

        <div className="flex flex-row p-5 justify-center items-center text-center">
          <div className="flex flex-col">
            <h1 className="uppercase font-bold text-[30px] text-slate-800">
              payment method
            </h1>
            <p className="text-[15px] text-slate-400 md:text-[20px]">
              We accepts the following payment method
            </p>
            <img src={paymentLogo} alt="payment-method-img" />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
