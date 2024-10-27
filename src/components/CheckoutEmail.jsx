import { styled, keyframes } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailCheckout from "./EmailCheckout.jsx";
import CheckoutAddress from "./CheckoutAddress.jsx";
import { useSelector } from "react-redux";
import img2 from "../assets/Bedroom/bed/baby-bed.avif";

const CheckoutEmail = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.data);
  console.log(cartProducts);

  let arr = [1, 2, 3];
  const [currStep, setCurrStep] = useState(arr[0]);
  const [percentageStart, setPercentageStart] = useState(0);
  const [percentageCompleted, setPercentageCompleted] = useState(0);

  // fetchItems from Cart
  // const cartProducts =

  const eachStepPercentage = 100 / arr.length + 14;

  const nextStepHandler = () => {
    setCurrStep((prev) => prev + 1);
    setPercentageStart(percentageCompleted);
    setPercentageCompleted((prev) => prev + eachStepPercentage);
    if (currStep.length === 2) {
      navigate("/checkOutAddress");
    }
  };
  return (
    <>
      <div className="w-full flex flex-col mx-auto h-[1048px] md:flex-row">
        <div className="px-5 flex flex-col pt-5 md:w-[720px]">
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
            {currStep == 1 ? (
              <EmailCheckout />
            ) : currStep === 2 ? (
              <CheckoutAddress />
            ) : (
              ""
            )}
            {/* <Link to="/checkoutAddress"> */}
            <button
              type="submit"
              className="px-4 py-3 text-white bg-black rounded hover:bg-gray-500 max-w-52"
              onClick={nextStepHandler}
            >
              Proceed To Shipping
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="bg-[#F1F5F9] relative h-full w-[560px]">
          <div className="flex flex-col h-full pt-4 px-5">
            <div className="flex flex-col bg-white p-2 rounded cursor-pointer gap-5">
              <div className="flex justify-between">
                <h1 className="text-[20px] font-bold">Your Cart</h1>
                <p className="font-bold flex items-center gap-3">
                  Items <IoIosArrowDown size={25} />
                </p>
              </div>
              {cartProducts.map(
                (id, name, img, price, actualPrice, quantity) => (
                  <div key={id} className="flex justify-between items-center">
                    <div className="max-w-[120px]">
                      <img src={img} alt="" className="w-full h-[120px]" />
                    </div>
                  </div>
                )
              )}
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
