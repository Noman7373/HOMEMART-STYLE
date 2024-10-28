import React from "react";

const CheckoutAddress = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="font-bold text-[18px]">Shipping address info.</h2>
          <p className="text-red-500">
            Fields marked with an asterisk (*) are required.
          </p>
        </div>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col md:flex-row justify-between  items-center gap-4">
            <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
              <label htmlFor="Firstname">First Name *</label>
              <input
                type="text"
                id="Firstname"
                name="FirstName"
                placeholder="Noman"
                required
                className="outline-0 py-1"
              />
            </div>
            <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
              <label htmlFor="Lastname">Last Name *</label>
              <input
                type="text"
                id="Lastname"
                name="Lastname"
                placeholder="Ahmed"
                required
                className="outline-0 py-1"
              />
            </div>
          </div>
          <div className="flex flex-col w-full p-2 border border-slate-300 rounded ">
            <label htmlFor="Address">Street Address *</label>
            <input
              id="Address"
              name="Address"
              type="text"
              placeholder="Bahrain"
              required
              className="outline-0 py-1"
            />
          </div>
          {/* <div className="flex flex-col w-full p-2 border border-slate-300 rounded">
            <label htmlFor="City">City *</label>
            <input
              id="City"
              name="City"
              type="text"
              placeholder="Hidd"
              required
              className="outline-0 py-1"
            />
          </div> */}

          <div className="grid grid-cols-2 gap-4">
            {/* <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
              <label htmlFor="Apartment">Apartment</label>
              <input
                type="Apartment"
                id="Apartment"
                name="Apartment"
                placeholder="......"
                required
                className="outline-0"
              />
            </div> */}
            {/* <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
              <label htmlFor="Company">Company</label>
              <input
                type="text"
                id="Company"
                name="Company"
                placeholder="....."
                className="outline-0"
              />
            </div> */}
            {/* <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
              <label htmlFor="State">State *</label>
              <input
                type="Apartment"
                id="State"
                name="State"
                placeholder="State"
                required
                className="outline-0"
              />
            </div>
            <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
              <label htmlFor="ZipCode">Zip Code *</label>
              <input
                type="text"
                id="ZipCode"
                name="ZipCode"
                placeholder="0432"
                className="outline-0"
              />
            </div> */}
          </div>
          {/* <div className="flex flex-col w-full p-2 border border-slate-300 rounded">
            <label htmlFor="Phone">Phone (delivery contact) *</label>
            <input
              id="Phone"
              name="Phone"
              type="text"
              placeholder="+000000000000"
              required
              className="outline-0"
            />
          </div> */}
        </form>
      </div>
    </>
  );
};

export default CheckoutAddress;
