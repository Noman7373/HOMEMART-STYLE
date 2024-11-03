import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Applayout from "./components/Applayout";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Bedrooms from "./components/Bedrooms";
import ProductDetail from "./components/ProductDetail";
import Livingroomsection from "./components/Livingroomsection";
import DiningRoom from "./components/DiningRoom";
import Officeitems from "./components/Officeitems";
import DecorProduct from "./components/DecorProduct";
import KitchenProducts from "./components/KitchenProducts";
import SignuPage from "./components/AuthPages/SignuPage";
import LoginPage from "./components/AuthPages/LoginPage";
import Forgotpassword from "./components/AuthPages/Forgotpassword";
import ForgotSuccess from "./components/AuthPages/ForgotSuccess";
import PasswordReset from "./components/AuthPages/PasswordReset";
import SuccessResetPassword from "./components/AuthPages/SuccessResetPassword";
import UserProfile from "./components/UserProfile";
import ProtecRoutes from "./components/AuthProtector/ProtecRoutes";

import CheckoutAddress from "./components/CheckoutAddress";
import CheckoutEmail from "./components/CheckoutEmail";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Main />
            </>
          ),
        },
        {
          path: "/bedroom",
          element: <Bedrooms />,
        },
        {
          path: "/livingroom",
          element: <Livingroomsection />,
        },
        {
          path: "/diningroom",
          element: <DiningRoom />,
        },
        {
          path: "/office",
          element: <Officeitems />,
        },
        {
          path: "/Decor",
          element: <DecorProduct />,
        },
        {
          path: "/kitchen",
          element: <KitchenProducts />,
        },
        {
          path: "/products-detail/:id",
          element: <ProductDetail />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/signup",
          element: <SignuPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/forgot-password",
          element: <Forgotpassword />,
        },
        {
          path: "/forgot-success",
          element: <ForgotSuccess />,
        },
        {
          path: "/password-reset",
          element: <PasswordReset />,
        },
        {
          path: "/password-reset-success",
          element: <SuccessResetPassword />,
        },
        {
          path: "/profile",
          element: (
            <ProtecRoutes>
              <UserProfile />,
            </ProtecRoutes>
          ),
        },
      ],
    },
    {
      path: "/main",
      element: <Main />,
    },
    {
      path: "/ProductPaymentCheckout",
      element: (
        <ProtecRoutes>
          <>
            <CheckoutEmail />,
            <Footer />
          </>
        </ProtecRoutes>
      ),
    },
    {
      path: "/checkOutAddress",
      element: (
        <ProtecRoutes>
          <>
            <CheckoutAddress />,
            <Footer />
          </>
        </ProtecRoutes>
      ),
    },
    // {
    //   path: "/checkoutPayment",
    //   element: (
    //     <ProtecRoutes>
    //       <>
    //         <CheckoutPayment />,
    //         <Footer />
    //       </>
    //     </ProtecRoutes>
    //   ),
    // },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
