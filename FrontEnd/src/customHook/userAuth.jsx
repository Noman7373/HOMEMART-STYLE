import React, { useContext } from "react";
import { AuthProvider } from "../Contexts/AuthProvider";

const userAuth = () => {
  const context = useContext(AuthProvider);

  if (context === undefined || context === null) {
    throw new Error("useData must be used within a ProductsProvider");
  }
  const { Toast, user, Email, token, userLogIn, userLogOut } = context;

  return {
    Toast,
    user,
    Email,
    token,
    userLogIn,
    userLogOut,
  };
};

export default userAuth;
