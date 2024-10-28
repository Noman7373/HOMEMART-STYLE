import { setupListeners } from "@reduxjs/toolkit/query";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const AuthProvider = createContext();

export const UserAuthProvider = ({ children }) => {
  const [cookies, setCookies, removeCookies] = useCookies();
  const [token, setToken] = useState(cookies.jwt || null);
  const [user, setUser] = useState(null);
  const [Email, setEmail] = useState(null);
  useEffect(() => {
    if (cookies.jwt) {
      const decodedToken = jwtDecode(cookies.jwt);
      const { exp } = decodedToken;

      if (exp && exp * 1000 > Date.now()) {
        setToken(cookies.jwt); // Set token if it's still valid

        setEmail(cookies.userEmail);
      } else {
        userLogOut(); // Log out if token is expired
      }
    }
  }, [cookies.jwt, cookies.userEmail]);

  const userLogIn = (tokenStr, userEmail) => {
    if (tokenStr) {
      setToken(tokenStr);

      setEmail(userEmail);
      const { exp } = jwtDecode(tokenStr);

      if (exp) {
        setCookies("jwt", tokenStr, {
          path: "/",
          maxAge: exp,
          sameSite: true,
        });
        setCookies("userEmail", userEmail, {
          path: "/",
          maxAge: exp,
          sameSite: true,
        });
      }
      return;
    }
    userLogOut();
  };

  const userLogOut = () => {
    setToken(null);
    setUser(null);
    setEmail(null);
    removeCookies("jwt", { path: "/" });
  };

  return (
    <AuthProvider.Provider
      value={{ user, Email, token, userLogIn, userLogOut }}
    >
      {children}
    </AuthProvider.Provider>
  );
};
