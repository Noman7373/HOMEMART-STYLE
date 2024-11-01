import Axios from "../axios";

const USER_URL = import.meta.env.REACT_APP_BACKEND_URL;
export const signUpUser = async ({
  name,
  email,
  password,
  password_confirmation,
  tc,
}) => {
  try {
    const response = await Axios.post(`${USER_URL}/api/user/register`, {
      name,
      email,
      password,
      password_confirmation,
      tc,
    });

    return response;
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};

export const signinUser = async ({ email, password }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/api/user/login`, {
      password,
      email,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};
