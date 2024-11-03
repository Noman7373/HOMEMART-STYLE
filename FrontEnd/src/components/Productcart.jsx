import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  decreamentQuantity,
  increamentQuantity,
  removeItemCart,
} from "../store/cartslice";
import { Link } from "react-router-dom";
import userAuth from "../customHook/userAuth";

const Productcart = ({ showCart, handleFunction }) => {
  const { Toast } = userAuth();
  const addToCartProducts = useSelector((state) => state.cart.data);

  // Subtotal of All addtocard items
  const totalAmout = addToCartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();

  const handleRemoveItems = (id) => {
    dispatch(removeItemCart(id));
    Toast(`Item removed from Cart`);
  };

  function handleIncreament(id) {
    dispatch(increamentQuantity(id));
  }
  function handleDecreamentQuantity(id) {
    dispatch(decreamentQuantity(id));
  }

  return (
    <>
      <div
        className={`${
          showCart
            ? "fixed bg-slate-800 overflow-y-auto sm:w-[400px] overflow-x-hidden h-full md:w-[500px] z-50 right-0 flex flex-col px-2"
            : "right-[-100px] max-[350px]:w-[200px]"
        }`}
      >
        <div className="flex justify-end relative">
          <button
            className="fixed top-8 right-6 bg-white rounded-full p-2 hover:bg-red-600 hover:text-white"
            onClick={handleFunction}
          >
            <RxCross1 size={30} />
          </button>
        </div>
        <div
          className={`${
            showCart
              ? "overflow-y-auto custom-scrollbar mt-[60px] sm:w-[370px] md:w-[480px] pb-[105px]"
              : "hidden"
          }`}
        >
          {Array.isArray(addToCartProducts) && addToCartProducts.length > 0 ? (
            addToCartProducts.map(
              ({ id, name, img, price, actualPrice, quantity }) => (
                <div
                  key={id}
                  className="flex items-center sm:w-[370px] md:w-full h-[200px] justify-around gap-2 p-2 border-b-[2px] border-b-slate-700"
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
                    <div className="flex flex-row gap-2 justify-center items-center">
                      <CiCircleMinus
                        onClick={() => handleDecreamentQuantity(id)}
                        size={25}
                        className="text-white rounded-full hover:bg-yellow-500 hover:text-black cursor-pointer"
                      />
                      <p className="flex flex-row gap-1 items-center justify-center text-[15px] md:text-[20px] text-slate-50">
                        X{quantity}=
                        <span className="text-white">
                          ${(price * quantity).toFixed(1)}
                        </span>
                      </p>
                      <CiCirclePlus
                        onClick={() => handleIncreament(id)}
                        size={25}
                        className="text-white rounded-full hover:bg-green-500 hover:text-black cursor-pointer"
                      />
                    </div>
                    <button
                      className="max-w-24 rounded border-[3px] border-slate-500 bg-transparent text-slate-400 px-2 py-1 hover:bg-red-500 hover:text-white"
                      onClick={() => handleRemoveItems(id)} // Fixed here
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            )
          ) : (
            <h1 className="text-white text-center mt-6 font-semibold text-[20px]">
              Oops! Your cart is empty.
            </h1>
          )}
        </div>

        {addToCartProducts.length > 0 ? (
          <div
            className={`${
              showCart
                ? "absolute flex flex-col gap-4 justify-center overflow-x-hidden left-0 items-center bottom-0 py-2 bg-slate-700 w-full z-10"
                : "hidden"
            }`}
          >
            <p className="flex justify-center items-center gap-2 text-slate-400 uppercase">
              SUBTOTAL{" "}
              <span className="font-semibold text-white">${totalAmout}</span>
            </p>
            <Link to="/ProductPaymentCheckout" onClick={handleFunction}>
              <button className="text-white bg-green-500 rounded px-6 py-2 hover:bg-black">
                Checkout
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Productcart;
