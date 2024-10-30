import { styled, keyframes } from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useCallback, useState } from "react";

import EmailCheckout from "./EmailCheckout.jsx";
import CheckoutAddress from "./CheckoutAddress.jsx";
import { useDispatch, useSelector } from "react-redux";
import ScrollTop from "./ScrollTop.jsx";
import { useNavigate } from "react-router-dom";
import { nextStep } from "../store/cartslice.js";

const CheckoutEmail = () => {
  const dispatch = useDispatch();
  const [showCartProduct, setShowCartProduct] = useState(false);
  let arr = [1, 2, 3, 4];
  const [barSteps, setBarSteps] = useState(arr[0]);
  //getingData from store
  const { percentageCompleted, progressSteps } = useSelector(
    (state) => state.cart
  );

  // fetchItems from Cart
  const cartProducts = useSelector((state) => state.cart.data);

  let actualPrice = cartProducts.map((items) => items.actualPrice);

  let modifiedPrice = actualPrice.map((price) => price);

  let cartActualPrice = modifiedPrice.reduce((acc, items) => acc + items, 0);

  // CustomerTotal Price
  const cartTotalPrice = cartProducts.reduce(
    (acc, items) => acc + items.price * items.quantity,
    0
  );

  let savedPrice = Math.abs(cartTotalPrice - cartActualPrice);

  /// array for progress bar

  // handleCartList Show
  const handleCartItemShow = () => {
    setShowCartProduct((prev) => !prev);
  };

  // handle Progrss Bar
  const nextStepHandler = useCallback(() => {
    setBarSteps((prev) => prev + 1);
    dispatch(nextStep());
  }, [dispatch]);

  return (
    <>
      <ScrollTop />
      <div className="w-full flex flex-col mx-auto md:flex-row max-[545px]:w-[370px] sm:w-[700px] md:w-full xs:overflow-x-hidden">
        <div className="px-5 flex flex-col pt-5 md:w-[750px] max-[545px]:w-[400px] xs:w-full">
          <div className="flex flex-col gap-6 xs:mb-3">
            <h1 className="uppercase text-[20px] font-bold">Homemart Style</h1>
            <div className="md:w-[670px] px-2 h-20 sm:w-[560px] flex flex-col justify-center items-center bg-[rgb(226,232,231)] rounded-3xl bg-[linear-gradient(145deg, #cacaca, #f0f0f0)] shadow-[5px_5px_17px_#b3b3b3,_-5px_-5px_17px_#fff] md:flex-row ">
              <div className="w-full sm:w-full md:w-full h-[4px] bg-[rgb(255,255,255)] flex items-center">
                <ProgressLineInner
                  $percentageStart={progressSteps}
                  $percentCompleted={percentageCompleted}
                >
                  <div className="absolute flex  justify-between w-full xs:w-[315px] sm:w-[545px] md:w-[655px]">
                    {arr.map((items, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            barSteps === 1
                              ? "w-[50px] h-[50px] bg-white rounded-[50%] flex items-center justify-center outline-custom animation"
                              : barSteps === 2
                              ? "w-[50px] h-[50px] bg-white rounded-[50%] flex items-center justify-center outline-custom animation "
                              : barSteps === 3
                              ? "w-[50px] h-[50px] bg-white rounded-[50%] flex items-center justify-center outline-custom animation animationCircleFiled"
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
            {progressSteps === 0 ? <EmailCheckout /> : <CheckoutAddress />}
            <button
              type="submit"
              className={`${
                progressSteps === 0
                  ? "px-4 py-3 text-white bg-black rounded hover:bg-gray-500 max-w-52"
                  : progressSteps === 1
                  ? "hidden"
                  : "hidden"
              }`}
              onClick={nextStepHandler}
            >
              Proceed To Shipping
            </button>
          </div>
        </div>
        <div className="bg-[#F1F5F9] relative h-full justify-center items-center w-[520px] max-[545px]:w-[380px] xs:w-[400px] sm:w-full md:w-full">
          <div className="flex flex-col h-full  pt-4  px-5 gap-14 md:w-full xs:w-[380px] sm:w-[600px] max-[500px]:w-[300px]">
            <div
              className="flex flex-col flex-wrap w-full bg-white p-3 rounded cursor-pointer gap-5 shadow-rgba(39, 39, 43, 0.2) 0px 7px 29px 0px;"
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
                        : "flex justify-between items-center mt-1 md:w-full sm:w-full"
                    }`}
                  >
                    <div className="w-[120px] h-[100px] xs:w-[100px]">
                      <img
                        src={items.img}
                        alt={items.name}
                        className="w-full h-full"
                      />
                    </div>
                    <p className="uppercase text-slate-900 font-bold xs:text-[13px]">
                      Expensive
                    </p>
                    <p className="text-[18px] font-semibold xs:text-[15px]">
                      Quantity : {items.quantity}
                    </p>
                    <p className="flex gap-1 font-bold xs:text-[13px]">
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
                <p className="text-[20px]">
                  ${Number(cartTotalPrice + 28).toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between flex-row font-semibold">
                <p className="text-red-500">You saved:</p>
                <p className="text-red-500">${savedPrice.toFixed(2)}</p>
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
  height: 3px;
  background-color: rgb(0, 175, 255);
  display: flex;
  align-items: center;
  animation: ${(props) =>
      progress(props.$percentageStart, props.$percentCompleted)}
    2s forwards;
`;
