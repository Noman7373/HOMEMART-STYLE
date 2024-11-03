import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { removeProductsWishList } from "../store/cartslice";
import { toast } from "react-toastify";

const Whishlist = ({ showWishList, handleWishListFunction }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.userFavProducts);

  const handleRemoveItems = (id) => {
    dispatch(removeProductsWishList(id));
    toast.success("Item Remove from WishList", {
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };
  return (
    <>
      <div
        className={`${
          showWishList
            ? "fixed bg-slate-800 overflow-y-auto sm:overflow-x-hidden md:overflow-x-hidden h-full w-[370px] z-50 right-0 flex flex-col px-2"
            : "right-[-100px]"
        }`}
      >
        <div
          className={`${
            showWishList
              ? "fixed z-50 right-44 uppercase font-bold text-slate-200 py-8"
              : "hidden"
          } `}
        >
          My WISHLIST
        </div>
        <div className="flex justify-end relative">
          <button
            className="fixed top-8 right-6 bg-white rounded-full p-2 hover:bg-red-600 hover:text-white"
            onClick={handleWishListFunction}
          >
            <RxCross1 size={30} />
          </button>
        </div>
        <div
          className={`${
            showWishList ? "overflow-y-auto mt-[60px] pb-[80px]" : "hidden"
          }`}
        >
          {Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map(({ id, name, img, price, actualPrice }) => (
              <div
                key={id}
                className="flex items-center h-[200px] justify-around gap-2 p-2 border-b-[2px] border-b-slate-700"
              >
                <div className="max-w-[150px]">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-2xl w-full h-[150px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-slate-50 uppercase">{name}</h3>
                  <p className="flex flex-row gap-6 items-center text-[15px] md:text-[20px] text-slate-50">
                    ${price}
                    <span className="text-slate-500 line-through">
                      ${actualPrice}
                    </span>
                  </p>

                  <button
                    className="max-w-24 rounded border-[3px] border-slate-500 bg-transparent text-slate-400 px-2 py-1 hover:bg-red-500 hover:text-white"
                    onClick={() => handleRemoveItems(id)} // Fixed here
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-white text-center mt-6 font-semibold text-[20px]">
              Oops! Your Wishlist is empty.
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Whishlist;
