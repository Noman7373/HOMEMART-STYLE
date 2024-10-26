import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const AuthProvider = createContext();

export const UserAuthProvider = ({ children }) => {
  const [cookies, setCookies, removeCookies] = useCookies();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(cookies.jwt || null);

  useEffect(() => {
    if (cookies.jwt) {
      const decodedToken = jwtDecode(cookies.jwt);
      const { exp } = decodedToken;

      if (exp && exp * 1000 > Date.now()) {
        setToken(cookies.jwt); // Set token if it's still valid
      } else {
        userLogOut(); // Log out if token is expired
      }
    }
  }, [cookies.jwt]);

  
  const userLogIn = (tokenStr) => {
    if (tokenStr) {
      setToken(tokenStr);
      const { exp } = jwtDecode(tokenStr);

      if (exp) {
        setCookies("jwt", tokenStr, {
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
    removeCookies("jwt", { path: "/" });
  };

  return (
    <AuthProvider.Provider value={{ user, token, userLogIn, userLogOut }}>
      {children}
    </AuthProvider.Provider>
  );
};
