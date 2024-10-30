import { BiCartAdd } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductWishList, addToCart } from "../store/cartslice";
import Aos from "aos";
import "aos/dist/aos.css";
import userAuth from "../customHook/userAuth";
const DecorProduct = () => {
  const { Toast } = userAuth();
  const [input, setinputValue] = useState("Lights");
  const dispatch = useDispatch();
  // Get Data from Cartslice store
  const livingRoomItems = useSelector((state) => state.cart.allProducts);

  useEffect(() => {
    Aos.init();
  }, []);

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
    Toast(`${name} Added to Cart`);
  }

  // Handle Wishlist Products
  function handleWishList(id, name, img, price, actualPrice) {
    let favProducts = { id, name, img, price, actualPrice };
    dispatch(addProductWishList(favProducts));
    Toast(`${name} Added to WishList`);
  }
  const handleFilter = (e) => {
    let inputValue = e.target.value;
    if (inputValue == "") {
      inputValue = "BEDS";
    }
    setinputValue(inputValue);
  };
  // Mataching items category the data to the input
  const allBedroomsProducts = livingRoomItems.filter(
    (items) => items.category.toUpperCase() == input.toUpperCase()
  );
  return (
    <>
      <div className="py-[40px] pt-[130px] px-6">
        <div className="flex md:px-[20px] justify-between items-center">
          <h1 className="uppercase my-[20px] p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit text-[25px] md:text-[40px]">
            {input}
          </h1>
          <div className="w-[150px] flex flex-col gap-1 max-[410px]:w-[120px]">
            <p className="text-black font-semibold text-[20px] md:text-[22px]">
              Filter Items
            </p>
            <form action="#">
              <select
                onChange={(e) => handleFilter(e)}
                name="select"
                id="select"
                value={input}
                className="w-full bg-black text-white px-2 py-2 rounded cursor-pointer md:text-[18px]"
              >
                <option value="Lights">Lights</option>
                <option value="Pillows">Pillows</option>
                <option value="Throw">Throw</option>
              </select>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-4 xs:place-items-center">
          {allBedroomsProducts.map(
            ({ id, name, img, description, price, actualPrice }) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={id}
                  className="rounded-2xl relative flex flex-col justify-center items-center w-[270px] shadow-2xl my-[10px]   xs:max-w-[150px] sm:max-w-[250px] md:max-w-[270px]"
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
                        <span className="text-slate-400 line-through">
                          ${actualPrice}
                        </span>
                        <p className="text-white font-bold ">${price}</p>
                      </div>
                    </div>
                    <div className="text-white flex gap-2 justify-center items-center md:flex-row xs:flex-col">
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
    </>
  );
};

export default DecorProduct;
