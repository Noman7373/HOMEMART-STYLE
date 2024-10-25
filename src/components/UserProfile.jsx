import { RiLogoutCircleRLine } from "react-icons/ri";
import userImage from "../assets/user_avater.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { logOut } from "../store/cartslice";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies();
  const { userInfo, isLoggedIn } = useSelector((state) => state.cart);
  console.log(userInfo);
  console.log(isLoggedIn);

  const handleLogOut = () => {
    removeCookies("jwt", { path: "/" });
    dispatch(logOut());
    navigate("/signup");
  };

  return (
    <>
      <div className="py-[40px] pt-[130px] px-6">
        <div className="flex justify-center items-center h-[350px]">
          <div className="flex flex-col md:flex-row gap-5 md:gap-[150px] rounded w-full justify-center items-center">
            <img
              src={userImage}
              alt="User Avatar"
              className="w-[200px] rounded-full border-2 border-gray-300"
            />

            <div className="flex flex-col justify-start items-start gap-8">
              <h1>My Profile</h1>
              <p className="flex justify-center items-center gap-2">
                Name <strong>Noman</strong>
              </p>
              <p className="flex justify-center items-center gap-2">
                Email <span>nkdfasdf</span>
              </p>
              <button
                className="flex justify-center items-center gap-2 px-4 py-2 bg-orange-500 rounded text-white font-semibold hover:text-orange-900"
                onClick={handleLogOut}
              >
                Logout
                <RiLogoutCircleRLine size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
