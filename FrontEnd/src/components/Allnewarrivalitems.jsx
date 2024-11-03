import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductWishList, addToCart } from "../store/cartslice";
import { HiHeart } from "react-icons/hi2";
import { BiCartAdd } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
import userAuth from "../customHook/userAuth";

const Allnewarrivalitems = ({ items }) => {
  const { Toast } = userAuth();
  const dispatch = useDispatch();
  const { id, name, img, description, price, actualPrice } = items;
  
  useEffect(() => {
    Aos.init();
  }, []);

  function handleAddToCart(id, name, img, description, price, actualPrice) {
    let product = {
      id,
      name,
      img,
      description,
      price,
      actualPrice,
      quantity: 1,
    };
    dispatch(addToCart(product));
    Toast(`${name} Added to Cart`);
  }

  function handleWishList(id, name, img, price, actualPrice) {
    let favProducts = { id, name, img, price, actualPrice };
    dispatch(addProductWishList(favProducts));
    Toast(`${name} Added to WishList`);
  }
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="rounded-2xl relative flex flex-col justify-center items-center w-[270px] shadow-2xl my-[10px] xs:max-w-[150px] sm:max-w-[250px] md:max-w-[270px]"
      >
        <p className="absolute top-4 left-2 bg-slate-500 text-white p-1 italic rounded text-[15px] z-10">
          New
        </p>
        <Link
          to={`/products-detail/${id}`}
          className="max-w-[150px] h-[130px] p-2"
        >
          <img
            src={img}
            alt={name}
            className="mt-2 w-full transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 h-full"
          />
        </Link>
        <div className="mt-6 flex w-full rounded-b-md bottom-0 left-0 right-0 p-2 bg-slate-700 flex-row justify-between">
          <div className="flex flex-col justify-between">
            <p className="md-text-[17px] text-[15px] text-white uppercase font-bold">
              {name}
            </p>
            <div className="flex gap-2 justify-between md:justify-start">
              <span className="text-slate-400 line-through">${actualPrice}</span>
              <p className="text-white font-bold">${price}</p>
            </div>
          </div>
          <div className="text-white flex gap-2 md:flex-row xs:flex-col justify-center items-center">
            <button
              className="hover:text-slate-400 text-[30px]"
              onClick={() => handleWishList(id, name, img, price, actualPrice)}
            >
              <HiHeart />
            </button>
            <button
              className="hover:text-slate-400 text-[30px]"
              onClick={() =>
                handleAddToCart(id, name, img, description, price, actualPrice)
              }
            >
              <BiCartAdd />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allnewarrivalitems;
