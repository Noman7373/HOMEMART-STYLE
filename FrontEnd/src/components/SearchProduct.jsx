import React, { useEffect, useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductWishList, addToCart } from "../store/cartslice";

const SearchProduct = ({ showSearch, handleSearch }) => {
  const [input, setInput] = useState("");
  const [allItems, setAllItems] = useState([]);
  const dispatch = useDispatch();
  // fetch All Products from Redux Store
  const allProducts = useSelector((state) => state.cart.allProducts);

  useEffect(() => {
    if (input === "") {
      setAllItems(allProducts);
    } else {
      const filteredProducts = allProducts.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setAllItems(filteredProducts);
    }
  }, [input, allProducts]);

  function handleAddToCart(id, name, img, description, price, actualPrice) {
    let products = {
      id,
      name,
      img,
      description,
      price,
      actualPrice,
      quantity: 1,
    };
    dispatch(addToCart(products));
  }

  // handle Wishlist products
  function handleWishList(id, name, img, price, actualPrice) {
    let favProducts = { id, name, img, price, actualPrice };
    dispatch(addProductWishList(favProducts));
  }

  return (
    <>
      <div
        className={`${
          showSearch
            ? "z-[100] bg-[rgba(0,0,0,0.5)] pl-[20px] pr-[20px] w-full h-full flex flex-row justify-center top-0 right-0 left-0 fixed transition-all duration-500 ease-in-out"
            : "top-[-100%] right-0 left-0 fixed transition-all duration-700 ease-in-out bg-[rgba(0,0,0,0.5)] pl-[20px] pr-[20px] w-full h-full"
        }`}
      >
        <div className="mb-[20px] pb-[20px] mt-[20px] px-[20px] pr-[20px] lg:min-w-[800px] md:min-w-[600px] sm:min-w-[400px] xs:min-w-[300px] bg-slate-50 rounded relative overflow-y-auto flex flex-col items-center gap-2">
          <button
            className="absolute top-4 right-6 bg-red-600 text-white rounded-full p-2 hover:bg-black hover:text-white xs:top-1 xs:right-0"
            onClick={handleSearch}
          >
            <RxCross1 size={30} />
          </button>
          {/* <label htmlFor="SearchInput"></label> */}
          <input
            type="text"
            placeholder="Search Product Here"
            className="items-center mt-[30px] outline-0 px-3 text-[20px] border-b-[2px] border-black w-[300px] bg-transparent placeholder:font-semibold"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <p className="text-[18px] font-semibold mt-4">
            {input == "" ? (
              "Search For Products"
            ) : (
              <span>Result of your search "{input}"</span>
            )}
          </p>

          <div
            className={`${
              showSearch
                ? "grid grid-cols-1 md:grid-cols-2 mx-[20px] mt-[30px] gap-6 md:place-content-center"
                : "hidden"
            } `}
          >
            {allItems &&
              allItems.map(
                ({ id, name, img, description, price, actualPrice }) => {
                  return (
                    <div
                      key={id}
                      className="rounded-2xl flex flex-col justify-center items-center w-[250px] shadow-2xl my-[10px]"
                    >
                      <Link
                        to={`/products-detail/${id}`}
                        className="max-w-[150px] h-[130px] p-2"
                      >
                        <img
                          onClick={handleSearch}
                          src={img}
                          alt={name}
                          className="mt-2 w-full transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 h-full"
                        />
                      </Link>

                      <div className="mt-6 flex w-full rounded-b-md bottom-0 left-0 right-0 p-2 bg-slate-700 flex-row justify-between">
                        <div className="">
                          <p className="md-text-[17px] text-[15px] text-white uppercase font-bold">
                            {name}
                          </p>
                          <div className="flex gap-2">
                            <span className="text-slate-400 line-through">
                              ${actualPrice}
                            </span>
                            <p className="text-white font-bold ">${price}</p>
                          </div>
                        </div>
                        <div className="text-white flex gap-2 justify-center items-center">
                          <button
                            className="hover:text-slate-400 text-[30px]"
                            onClick={() =>
                              handleWishList(id, name, img, price, actualPrice)
                            }
                          >
                            <HiHeart />
                          </button>
                          <button
                            className="hover:text-slate-400 text-[30px]"
                            onClick={() =>
                              handleAddToCart(
                                id,
                                name,
                                img,
                                description,
                                price,
                                actualPrice
                              )
                            }
                          >
                            <BiCartAdd />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProduct;
