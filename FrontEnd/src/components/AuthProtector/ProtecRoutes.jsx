import { useEffect } from "react";
import userAuth from "../../customHook/userAuth";
import { useNavigate } from "react-router-dom";

const ProtecRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { token } = userAuth();

  useEffect(() => {
    // Check for the token on initial mount
    if (!token) {
      navigate("/signup"); // Navigate to signup if token is not present
    }
  }, []); // Empty dependency array ensures this runs only once
  return <>{token ? children : null}</>;
};

export default ProtecRoutes;
