import { invokeApi } from "../utils/invokeApi";

export const login_user = (payload) => {
  const requestObj = {
    method: "POST",
    url: "users/login",
    headers: {
      "Content-Type": "application/json",
    },
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

export const get_profile = () => {
  const requestObj = {
    method: "GET",
    url: "users/profile",
    headers: {
      "Content-Type": "application/json",
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};
export const update_personal_info = (payload) => {
  const requestObj = {
    method: "POST",
    url: "users/edit_profile",
    headers: {
      "Content-Type": "application/json",
      "x-sh-auth": localStorage.getItem("token"),
    },
    data: payload,
  };
  return invokeApi(requestObj);
};
export const update_interest = (payload) => {
  const requestObj = {
    method: "POST",
    url: "users/interest",
    headers: {
      "Content-Type": "application/json",
      "x-sh-auth": localStorage.getItem("token"),
    },
    data: payload,
  };
  return invokeApi(requestObj);
};
export const update_disease = (payload) => {
  const requestObj = {
    method: "POST",
    url: "users/disease",
    headers: {
      "Content-Type": "application/json",
      "x-sh-auth": localStorage.getItem("token"),
    },
    data: payload,
  };
  return invokeApi(requestObj);
};
export const update_location = (payload) => {
  const requestObj = {
    method: "POST",
    url: "users/location",
    headers: {
      "Content-Type": "application/json",
      "x-sh-auth": localStorage.getItem("token"),
    },
    data: payload,
  };
  return invokeApi(requestObj);
};
export const user_feed = () => {
  const requestObj = {
    method: "GET",
    url: "users/feed",
    headers: {
      "Content-Type": "application/json",
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};
export const get_requests = () => {
  const requestObj = {
    url: "users/get_requests",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};
export const get_profile_by_id = (id) => {
  const requestObj = {
    url: `users/get_profile_by_id/${id}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};

export const request_message = (id) => {
  const requestObj = {
    url: `users/request_message/${id}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};

export const accept_request = ({ id, payload }) => {
  const requestObj = {
    url: `users/accept_request/${id}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-sh-auth": localStorage.getItem("token"),
    },
    data: payload,
  };
  return invokeApi(requestObj);
};
