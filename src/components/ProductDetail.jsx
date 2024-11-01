import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProductWishList, addToCart } from "../store/cartslice";
import userAuth from "../customHook/userAuth";

const ProductDetail = () => {
  const { Toast } = userAuth();
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.cart.allProducts);

  let individualProductDetails = product.filter((items) => items.id == id);

  let fetchData = individualProductDetails.map((items) => {
    return {
      id: items.id,
      name: items.name,
      img: items.img,
      description: items.description,
      price: items.price,
      actualPrice: items.actualPrice,
    };
  });
  const { name, img, description, price, actualPrice } = fetchData[0] || {};

  // handle Addtocart Function
  function handleAddToCart(id, name, img, description, price, actualPrice) {
    let addToCartItems = {
      id,
      name,
      img,
      description,
      price,
      actualPrice,
      quantity: 1,
    };
    dispatch(addToCart(addToCartItems));
    Toast(`${name} Added to Cart`);
  }

  // handle Wishlist products
  function handleWishList(id, name, img, price, actualPrice) {
    let favProducts = { id, name, img, price, actualPrice };
    dispatch(addProductWishList(favProducts));
    Toast(`${name} Added to WishList`);
  }

  return (
    <>
      <div className="px-[30px] py-[70-px] pt-[130px] bg-[#F7F7F7]">
        <div className="bg-[#F7F7F7] md:max-h-[350px] flex md:flex-row justify-around gap-4 rounded-lg overflow-y-hidden pt-4 pb-2 xs:flex-col xs:h-full">
          <div className="max-w-[300px] md:max-h-[350px]">
            <img src={img} alt="" className="w-full h-full bg-[#F7F7F7]" />
          </div>

          <div className="flex flex-col justify-between gap-2">
            <h3 className="uppercase text-[16px] text-slate-800 font-semibold">
              Name
            </h3>
            <h1 className="uppercase text-black font-bold text-[22px]">
              {name}
            </h1>
            <p className="text-[16px] uppercase text-slate-800 font-semibold">
              Price
            </p>
            <p className="flex text-[16px] gap-4">
              ${price}
              <span className="line-through text-[16px] text-slate-600">
                ${actualPrice}
              </span>
            </p>
            <h3 className="text-[16px] uppercase text-slate-800">
              Description
            </h3>
            <p className="text-[15px] text-slate-600 max-w-[500px]">
              {description.slice(0, 120)}
            </p>
            <div className="flex flex-row justify-start items-start gap-4 my-5">
              <button
                className="bg-slate-800 px-[22px] py-[10px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 rounded text-[14px] md:text-[17px]
              text-slate-50 border"
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
                Add To Cart
              </button>
              <button
                className="px-[22px] py-[10px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 rounded text-[14px] md:text-[17px]
              text-slate-800 border border-slate-800"
                onClick={() =>
                  handleWishList(id, name, img, price, actualPrice)
                }
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ProductDetail;
