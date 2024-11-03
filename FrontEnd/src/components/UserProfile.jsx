import { RiLogoutCircleRLine } from "react-icons/ri";
import userImage from "../assets/user_avater.jpg";
import userAuth from "../customHook/userAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast directly

const UserProfile = () => {
  const navigate = useNavigate();
  const { userLogOut, Email } = userAuth();
  const handleLogOut = () => {
    userLogOut();
    toast.success("Logout successfully", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: "light",
    });
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

            <div className="flex flex-col justify-start items-start gap-4">
              <h1 className="font-bold">Welcome To our HomeMart Style store</h1>
              {/* <p className="flex justify-center items-center gap-2">
                Name: <strong>{user}</strong>
              </p> */}
              <p className="flex justify-center items-center gap-2">
                Email: <span className="font-semibold">{Email}</span>
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
