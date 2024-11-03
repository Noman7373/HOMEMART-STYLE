import paymentLogo from "../assets/cardir.png";
import paymentLogo2 from "../assets/pay.png";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setShippingAddress,
  setBillingAddress,
  setCurrStep,
  nextStep,
} from "../store/cartslice";
import { useNavigate } from "react-router-dom";

import userAuth from "../customHook/userAuth";

const CheckoutAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Toast } = userAuth();

  // Getting obj from RTK store
  const { shippingAddress, billingAddress, currStep } = useSelector(
    (state) => state.cart
  );

  const [shippingData, setShippingData] = useState(shippingAddress);
  const [billingData, setBillingData] = useState(billingAddress);
  const [otpSent, setOtpSent] = useState(false);

  // Handle Form
  const handleInputChange = (e, setAddressData) => {
    const { name, value } = e.target;
    setAddressData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBillingForm = (e, setBillingAddress) => {
    const { name, value } = e.target;
    setBillingAddress((prevData) => ({ ...prevData, [name]: value }));
  };

  // Send OTP to user
  const sendOTP = (e) => {
    e.preventDefault();
    if (
      shippingData.firstName &&
      shippingData.lastName &&
      shippingData.street &&
      shippingData.city &&
      shippingData.phone
    ) {
      setOtpSent(true);
      dispatch(nextStep());
    }
  };

  // handle Payment complete
  const handlePaymentComplete = (e) => {
    e.preventDefault();
    if (
      billingData.cardName &&
      billingData.cardNumber &&
      billingData.Expiry &&
      billingData.CVV
    ) {
      Toast("Your Payment has been completed");
      dispatch(nextStep());
      navigate("/");
    }
  };

  const saveShippingAddress = () => {
    dispatch(setShippingAddress(shippingData));
    dispatch(setCurrStep(1));
  };

  const saveBillingAddress = () => {
    dispatch(setBillingAddress(billingData));
    dispatch(setCurrStep(2));
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-[18px]">Shipping address info.</h2>
          <p className="text-red-500">
            Fields marked with an asterisk (*) are required.
          </p>
          <p>No Backend added for otp its just a dummy......</p>
          <h1 className="font-bold">Steps - 1</h1>
        </div>
        {currStep === 0 && (
          <form className="flex flex-col gap-3" onSubmit={sendOTP}>
            <div className="flex flex-col md:flex-row justify-between  items-center gap-4">
              <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Noman"
                  required
                  className="outline-0 py-1"
                  value={shippingData.firstName || ""}
                  onChange={(e) => handleInputChange(e, setShippingData)}
                />
              </div>
              <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Ahmed"
                  required
                  className="outline-0 py-1"
                  value={shippingData.lastName || ""}
                  onChange={(e) => handleInputChange(e, setShippingData)}
                />
              </div>
            </div>
            <div className="flex flex-col w-full p-2 border border-slate-300 rounded ">
              <label htmlFor="street">Street Address *</label>
              <input
                id="street"
                name="street"
                type="text"
                placeholder="Street Address"
                required
                className="outline-0 py-1"
                value={shippingData.street || ""}
                onChange={(e) => handleInputChange(e, setShippingData)}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full gap-4 ">
              <div className="flex flex-col w-full justify-center p-2 border border-slate-300 rounded">
                <label htmlFor="city">City *</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="City"
                  required
                  className="outline-0 py-1"
                  value={shippingData.city || ""}
                  onChange={(e) => handleInputChange(e, setShippingData)}
                />
              </div>
              <div className="flex flex-col  p-2 border border-slate-300 rounded">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="+000000000000"
                  required
                  className="outline-0"
                  value={shippingData.phone || ""}
                  onChange={(e) => handleInputChange(e, setShippingData)}
                />
              </div>
            </div>

            <button
              className={`${
                !otpSent
                  ? "px-4 py-3 mt-6 text-white bg-black rounded hover:bg-gray-500 max-w-40"
                  : "hidden"
              }`}
              type="submit"
            >
              Send OTP
            </button>
          </form>
        )}

        {otpSent && (
          <div className="flex flex-col gap-2 mt-4">
            <div>
              <h2 className="font-bold text-[18px]">
                We accepts the following payment Method
              </h2>
              <h1 className="mt-2 mb-2 font-bold">Step - 2</h1>
              <div className="flex justify-start  items-center gap-6 h-[90px] mt-6">
                <img
                  src={paymentLogo}
                  alt="paymentLogo"
                  className="h-full hover:bg-slate-200 border-[2px] border-slate-500 p-2 rounded"
                />
                <img
                  src={paymentLogo2}
                  alt="PaypalLogo"
                  className="h-full w-fit border border-slate-300 hover:bg-slate-200 rounded"
                />
              </div>
              <p className="mt-4 text-slate-400">
                Fields marked with an asterisk (*) are required.
              </p>
            </div>
            <form
              className="flex flex-col mt-3 gap-3"
              onSubmit={handlePaymentComplete}
            >
              <div className="flex flex-col w-full p-2 border border-slate-300 rounded ">
                <label htmlFor="cardName">Name On The Card *</label>
                <input
                  id="cardName"
                  name="cardName"
                  type="text"
                  placeholder="Noman Ahmed"
                  required
                  className="outline-0 py-1"
                  value={billingData.cardName || ""}
                  onChange={(e) => handleBillingForm(e, setBillingData)}
                />
              </div>
              <div className="flex flex-col w-full p-2 border border-slate-300 rounded">
                <label htmlFor="cardNumber">Card Number *</label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="number"
                  placeholder="1234 56789 9012 3456"
                  required
                  className="outline-0 py-1"
                  value={billingData.cardNumber || ""}
                  onChange={(e) => handleBillingForm(e, setBillingData)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
                  <label htmlFor="Expiry">Expiry Day *</label>
                  <input
                    type="text"
                    id="Expiry"
                    name="Expiry"
                    placeholder="06/25"
                    required
                    className="outline-0"
                    value={billingData.Expiry || ""}
                    onChange={(e) => handleBillingForm(e, setBillingData)}
                  />
                </div>
                <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
                  <label htmlFor="CVV">CVC/CVV *</label>
                  <input
                    type="text"
                    id="CVV"
                    name="CVV"
                    placeholder="CVC/CVV"
                    className="outline-0"
                    value={billingData.CVV || ""}
                    onChange={(e) => handleBillingForm(e, setBillingData)}
                  />
                </div>
              </div>
              {otpSent && (
                <button
                  className="px-4 py-3 mt-6 text-white bg-black rounded hover:bg-gray-500 w-[200px]"
                  type="submit"
                >
                  Complete the Payment
                </button>
              )}
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutAddress;
