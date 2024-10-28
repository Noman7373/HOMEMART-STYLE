import { styled, keyframes } from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

import EmailCheckout from "./EmailCheckout.jsx";
import CheckoutAddress from "./CheckoutAddress.jsx";
import { useSelector } from "react-redux";
import CheckoutPayment from "./CheckoutPayment.jsx";
import ScrollTop from "./ScrollTop.jsx";

const CheckoutEmail = () => {
  // fetchItems from Cart
  const cartProducts = useSelector((state) => state.cart.data);

  let actualPrice = cartProducts.map((items) => items.actualPrice);

  let modifiedPrice = actualPrice.map((price) => Number(price.slice(1)));

  const cartActualPrice = modifiedPrice.reduce((acc, items) => acc + items, 0);

  // CustomerTotal PRice
  const cartTotalPrice = cartProducts.reduce(
    (acc, items) => acc + items.price * items.quantity,
    0
  );

  // FinalCustomer Saved Price
  let savedPrice = Math.abs(cartTotalPrice - cartActualPrice);

  let arr = [1, 2, 3];
  const [currStep, setCurrStep] = useState(arr[0]);
  const [percentageStart, setPercentageStart] = useState(0);
  const [percentageCompleted, setPercentageCompleted] = useState(0);
  const [showCartProduct, setShowCartProduct] = useState(false);

  const handleCartItemShow = () => {
    setShowCartProduct((prev) => !prev);
  };

  const eachStepPercentage = 100 / arr.length + 14;

  const nextStepHandler = () => {
    setCurrStep((prev) => prev + 1);
    setPercentageStart(percentageCompleted);
    setPercentageCompleted((prev) => prev + eachStepPercentage);
  };
  return (
    <>
      <ScrollTop />
      <div className="w-full flex flex-col mx-auto h-[1048px] md:flex-row">
        <div className="px-5 flex flex-col pt-5 md:w-[750px]">
          <div className="flex flex-col gap-6">
            <h1 className="uppercase text-[20px] font-bold">Homemart Style</h1>
            <div className="w-[670px] px-2 h-20  flex flex-col justify-center items-center bg-[rgb(226,232,231)] rounded-3xl bg-[linear-gradient(145deg, #cacaca, #f0f0f0)] shadow-[5px_5px_17px_#b3b3b3,_-5px_-5px_17px_#fff] md:flex-row ">
              <div className="w-full h-[4px] bg-[rgb(255,255,255)] flex items-center">
                <ProgressLineInner
                  $percentageStart={percentageStart}
                  $percentCompleted={percentageCompleted}
                >
                  <div className="absolute flex justify-between w-[655px]">
                    {arr.map((items, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            currStep === items
                              ? "w-[50px] h-[50px] bg-white rounded-[50%] flex items-center justify-center outline-custom animation"
                              : currStep > items
                              ? "w-[50px] h-[50px] bg-white rounded-[50%] flex items-center justify-center outline-custom animationCircleFiled"
                              : "w-[50px] h-[50px] bg-white rounded-[50%] flex items-center justify-center"
                          }
                        >
                          <h1>{items}</h1>
                        </div>
                      );
                    })}
                  </div>
                </ProgressLineInner>
              </div>
            </div>

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
            {currStep === 1 ? (
              <EmailCheckout />
            ) : currStep === 2 ? (
              <CheckoutAddress />
            ) : (
              <CheckoutPayment />
            )}
            <button
              type="submit"
              className="px-4 py-3 text-white bg-black rounded hover:bg-gray-500 max-w-52"
              onClick={nextStepHandler}
            >
              {currStep === 1
                ? "Proceed To Shipping"
                : currStep === 2
                ? "Continue To Payment"
                : "Complete Payment"}
            </button>
          </div>
        </div>
        <div className="bg-[#F1F5F9] relative h-full w-[520px]">
          <div className="flex flex-col h-full pt-4 px-5 gap-14">
            <div
              className="flex flex-col bg-white p-3 rounded cursor-pointer gap-5 shadow-rgba(39, 39, 43, 0.2) 0px 7px 29px 0px;"
              onClick={() => handleCartItemShow()}
            >
              <div className="flex justify-between">
                <h1 className="text-[20px] font-bold">Your Cart</h1>
                <p className="font-bold flex items-center gap-3">
                  Items{" "}
                  {showCartProduct ? (
                    <IoIosArrowDown size={25} />
                  ) : (
                    <IoIosArrowUp size={25} />
                  )}
                </p>
              </div>
              {cartProducts.map((items) => {
                return (
                  <div
                    key={items.id}
                    className={`${
                      showCartProduct
                        ? "hidden"
                        : "flex justify-between items-center mt-1"
                    }`}
                  >
                    <div className="w-[120px] h-[100px]">
                      <img
                        src={items.img}
                        alt={items.name}
                        className="w-full h-full"
                      />
                    </div>
                    <p className="uppercase text-slate-900 font-bold">
                      Expensive
                    </p>
                    <p className="text-[18px] font-semibold">
                      Quantity : {items.quantity}
                    </p>
                    <p className="flex gap-1 font-bold">
                      ${items.price}{" "}
                      <span className="text-slate-500 line-through">
                        {items.actualPrice}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4 px-3 py-1">
              <span className="flex justify-between items-center">
                <p className="text-[#476293] text-[18px]">Subtotal:</p>
                <p className="text-[#476293] text-[18px]">
                  ${cartTotalPrice.toFixed(2)}
                </p>
              </span>
              <span className="flex justify-between items-center">
                <p className="text-[#476293] text-[18px]">Shipping:</p>
                <p className="text-[#476293] text-[18px]">$20.00</p>
              </span>
              <span className="flex justify-between items-center">
                <p className="text-[#476293] text-[18px]">Sales Tax:</p>
                <p className="text-[#476293] text-[18px]">$8.00</p>
              </span>
              <hr className="h-1 bg-gray-500 border-0 rounded" />
              <div className="flex justify-between flex-row font-semibold">
                <p className="text-[20px]">Total</p>
                <p className="text-[20px]">${cartTotalPrice + 28}</p>
              </div>
              <div className="flex justify-between flex-row font-semibold">
                <p className="text-red-500">You saved:</p>
                <p className="text-red-500">${savedPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutEmail;

const progress = (percentageStart, percentageCompleted) => keyframes`
  from{
    width: ${percentageStart}%;
  }
  to{
    width: ${percentageCompleted}%;
  }
`;

const ProgressLineInner = styled.div`
  height: 2px;
  background-color: rgb(0, 174, 255);
  display: flex;
  align-items: center;
  animation: ${(props) =>
      progress(props.$percentageStart, props.$percentCompleted)}
    2s forwards;
`;
