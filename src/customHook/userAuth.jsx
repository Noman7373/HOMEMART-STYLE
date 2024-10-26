import React, { useContext } from "react";
import { AuthProvider } from "../Contexts/AuthProvider";

const userAuth = () => {
  const context = useContext(AuthProvider);
  console.log(context);
  

  if (context === undefined || context === null) {
    throw new Error("useData must be used within a ProductsProvider");
  }
  const { user, token, userLogIn, userLogOut } = context;
  console.log(token);

  return {
    user,
    token,
    userLogIn,
    userLogOut,
  };
};

export default userAuth;
