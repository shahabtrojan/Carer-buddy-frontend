import { invokeApi } from "../utils/invokeApi";

export const login_user = (payload) => {
  const requestObj = {
    method: "POST",
    url: "users/login",
    data: payload,
  };
  return invokeApi(requestObj);
};

export const signup_user = (payload) => {
  const requestObj = {
    method: "POST",
    url: "users/signup",
    data: payload,
  };
  return invokeApi(requestObj);
};
