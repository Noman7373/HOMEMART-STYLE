import React, { useEffect, useRef, useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../Api/Query/userQuery";
// import { useDispatch } from "react-redux";
// import { logIn, logOut } from "../../store/cartslice";
// import { useCookies } from "react-cookie";
// import { logOut } from "../../store/cartslice";

const SignuPage = () => {
  const [errors, setErrors] = useState({});
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const InputRef = useRef(null);
  const [passwordType, setpasswordType] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    tc: false,
  });

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name) {
      newErrors.name = "name is requried";
    }
    if (!formValues.email) {
      newErrors.email = "email is requried";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "email is invalid";
    }
    if (!formValues.password || formValues.password.length < 0) {
      newErrors.password = "password must be at least 8 characters";
    }
    if (formValues.password !== formValues.password_confirmation) {
      newErrors.password_confirmation = "password must be match";
    }
    if (!formValues.tc) {
      newErrors.tc = "You must accept the terms and conditions"; // Validation for tc
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      try {
        const response = await signUpUser({
          name: formValues.name,
          email: formValues.email,
          password: formValues.password,
          password_confirmation: formValues.password_confirmation,
          tc: formValues.tc,
        });
        // console.log("API Response:", response);

        // Check if the response contains a token
        if (response) {
          // dispatch(logIn({ tokenStr: response.data.token }));
          // console.log("Navigating to home...");
          navigate("/"); // Redirect to home or another page on success
        } else {
          setErrors({ submit: "Sign-up failed. Token not received." });
        }
      } catch (error) {
        console.error("Sign-up failed:", error.message);
        setErrors({ submit: error.message });
      }
    }
  };

  function handleTooglepasswordType() {
    setpasswordType((Prev) => !Prev);
  }

  return (
    <div className="py-[100px] px-[20px]">
      <div className="flex flex-row justify-center">
        <div className="bg-slate-900 md:px-[70px] flex flex-col p-[20px] rounded shadow-2xl">
          <div className="flex flex-col w-[275px] h-full">
            <h1 className="text-center text-slate-50 font-semibold text-[20px] capitalize mb-3">
              It's nice having you here!
            </h1>
            <p className="text-center text-slate-300 font-semibold text-[20px] capitalize mb-3">
              signup with your email
            </p>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* <label htmlFor="email">email</label> */}
              <input
                ref={InputRef}
                name="name"
                autoComplete="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Noman Ahmed"
                className="bg-white text-slate-800 p-3 rounded shadow w-full outline-0"
              />
              {errors.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
              )}
              <input
                name="email"
                autoComplete="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="officialnomanahmed@gamilcom"
                className="bg-white text-slate-800 p-3 rounded shadow w-full outline-0"
              />

              {errors.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}
              {/* <label htmlFor="password">password</label> */}
              <div className="relative">
                <input
                  name="password"
                  type={`${passwordType ? "email" : "password"}`}
                  placeholder={`${passwordType ? "password" : "********"}`}
                  className="bg-white text-slate-800 p-3 rounded shadow w-full outline-0"
                  autoComplete="password"
                  autoCapitalize="off"
                  value={formValues.password}
                  onChange={handleChange}
                />

                {passwordType ? (
                  <IoEyeOutline
                    size={22}
                    className="absolute inset-y-0 top-3 right-3 flex items-center text-gray-500 cursor-pointer hover:text-black"
                    onClick={handleTooglepasswordType}
                  />
                ) : (
                  <BsEyeSlash
                    size={22}
                    className="absolute inset-y-0 top-3 right-3 flex items-center text-gray-500 cursor-pointer hover:text-black"
                    onClick={handleTooglepasswordType}
                  />
                )}
              </div>

              <input
                name="password_confirmation"
                type={`${passwordType ? "email" : "password"}`}
                placeholder={`${passwordType ? "password" : "********"}`}
                className="bg-white text-slate-800 p-3 rounded shadow w-full outline-0"
                autoComplete="password_confirmation"
                autoCapitalize="off"
                value={formValues.password_confirmation}
                onChange={handleChange}
              />

              {errors.password_confirmation && (
                <div className="text-red-500 text-sm">
                  {errors.password_confirmation}
                </div>
              )}

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="tc"
                  checked={formValues.tc}
                  onChange={handleChange}
                />
                <p className="text-white">
                  I agree to the terms and conditions
                </p>
              </div>
              {errors.tc && <div className="text-red-600">{errors.tc}</div>}
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded font-bold"
              >
                Sign Up
              </button>
            </form>

            {errors.tc && (
              <div className="text-red-500 text-sm">{errors.tc}</div>
            )}

            <p className="text-center text-white mt-6">
              Already have an account?{" "}
              <Link to="/login" className="uppercase font-bold">
                LOG IN
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignuPage;
