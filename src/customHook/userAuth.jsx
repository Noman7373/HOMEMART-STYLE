import React, { useContext } from "react";
import { AuthProvider } from "../Contexts/AuthProvider";

const userAuth = () => {
  const context = useContext(AuthProvider);

  if (context === undefined || context === null) {
    throw new Error("useData must be used within a ProductsProvider");
  }
  const { user, Email, token, userLogIn, userLogOut } = context;

  return {
    user,
    Email,
    token,
    userLogIn,
    userLogOut,
  };
};

export default userAuth;
