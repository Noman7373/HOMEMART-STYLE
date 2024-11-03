import userImage from "../assets/OIP.jpg";
import React, { useState } from "react";
import { BiMenu, BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import Productcart from "./Productcart";
import Whishlist from "./Whishlist";
import { TbArrowsCross } from "react-icons/tb";
import SearchProduct from "./SearchProduct";
import userAuth from "../customHook/userAuth";
import { useDispatch, useSelector } from "react-redux";
import { GoDotFill } from "react-icons/go";

const Navbar = () => {
  const { token, userLogOut, Toast } = userAuth();
  const cartProduct = useSelector((state) => state.cart.data);
  const wishListProduct = useSelector((state) => state.cart.userFavProducts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [WishlistShow, setWishlistShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  function handleShowMenu() {
    setShowMenu((prev) => !prev);
  }

  function handleCartSlide() {
    setCartShow((prev) => !prev);
  }
  function handleWishlistSlide() {
    setWishlistShow((prev) => !prev);
  }

  function handleSearch() {
    setShowSearch((prev) => !prev);
  }

  // logOutHandler for small devices
  const logOutHandler = () => {
    handleShowMenu();
    userLogOut();
    Toast("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
      <nav className=" h-24 w-full bg-black flex justify-around text-center items-center text-white shadow-2xl fixed z-20">
        <div>
          <h1 className="uppercase text-[20px] md:text-[27px] text-slate-100 font-bold">
            HomeStyle Mart
          </h1>
        </div>

        <ul className="hidden gap-6 text-[16px] md:flex">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/bedroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Bedroom</li>
          </NavLink>
          <NavLink
            to="/livingroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Living Room</li>
          </NavLink>
          <NavLink
            to="/diningroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Dinning Room</li>
          </NavLink>
          <NavLink
            to="/office"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Office</li>
          </NavLink>
          <NavLink
            to="/Decor"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Decor</li>
          </NavLink>
          <NavLink
            to="/kitchen"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Kitchen</li>
          </NavLink>
        </ul>

        <div className="flex justify-center items-center gap-2">
          {!token ? (
            <div className="flex justify-center items-center gap-2">
              <Link to="/login">
                <button className="border border-white p-1 align-middle rounded xs:hidden md:block">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="border border-white p-1 align-middle rounded bg-white text-black font-bold xs:hidden md:block">
                  Signup
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/profile">
              <figure>
                <img
                  src={userImage}
                  alt="userImage"
                  className="w-8 rounded-3xl"
                />
              </figure>
            </Link>
          )}
          <button
            className="hover:text-slate-400 text-[30px]"
            onClick={handleSearch}
          >
            <BiSearch />
          </button>
          <button
            className="hover:text-slate-400 text-[30px]"
            onClick={handleWishlistSlide}
          >
            {wishListProduct.length > 0 ? (
              <span className="fixed top-3">
                <GoDotFill />
              </span>
            ) : (
              ""
            )}
            <FaHeart />
          </button>

          <button
            className="hover:text-slate-400 text-[30px]"
            onClick={handleCartSlide}
          >
            {cartProduct.length > 0 ? (
              <span className="fixed top-3">
                <GoDotFill />
              </span>
            ) : (
              ""
            )}
            <PiShoppingCartSimpleFill />
          </button>

          {/* Menu button for small devices */}
          <button
            className="hover:text-slate-400 text-[30px] md:hidden xs:flex"
            onClick={handleShowMenu}
          >
            {showMenu ? <TbArrowsCross /> : <BiMenu />}
          </button>
        </div>
      </nav>
      {/* imporing add to cart side bar components */}
      <Productcart showCart={cartShow} handleFunction={handleCartSlide} />
      <Whishlist
        showWishList={WishlistShow}
        handleWishListFunction={handleWishlistSlide}
      />

      {/* search components */}
      <SearchProduct showSearch={showSearch} handleSearch={handleSearch} />

      {/* Menu for small devices */}

      <aside
        className={`${
          showMenu
            ? "h-full fixed transition duration-500 left-0 w-[220px] bg-black z-50 md:hidden"
            : "left-[-300px] transition duration-500 h-full fixed w-[220px] bg-black z-50 md:hidden "
        }`}
      >
        <ul className="text-slate-100 flex flex-col gap-3 my-[100px] justify-center items-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/bedroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Bedroom</li>
          </NavLink>
          <NavLink
            to="/livingroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Living Room</li>
          </NavLink>
          <NavLink
            to="/diningroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Dinning Room</li>
          </NavLink>
          <NavLink
            to="/office"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Office</li>
          </NavLink>
          <NavLink
            to="/Decor"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Decor</li>
          </NavLink>
          <NavLink
            to="/kitchen"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Kitchen</li>
          </NavLink>
          {!token ? (
            <div className="flex flex-col gap-3 items-center">
              <Link to="/login" onClick={handleShowMenu}>
                <button className="border border-white p-1 align-middle rounded">
                  Login
                </button>
              </Link>
              <Link to="/signup" onClick={handleShowMenu}>
                <button className="border border-white p-1 align-middle rounded bg-white text-black font-bold ">
                  Signin
                </button>
              </Link>{" "}
            </div>
          ) : (
            <button
              className="border border-white p-1 align-middle rounded bg-white text-black font-bold"
              onClick={logOutHandler}
            >
              Logout
            </button>
          )}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
