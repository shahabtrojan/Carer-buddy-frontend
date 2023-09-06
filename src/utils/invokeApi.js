import axios from "axios";
export const BASE_URL = "http://13.48.183.72:3000/";
export const invokeApi = async ({
  url,
  method = "POST",
  headers = {
    "Content-Type": "application/json",
  },
  data = {},
}) => {
  try {
    const requestObj = {
      method: method,
      url: BASE_URL + url,
      headers: headers,
      data,
    };
    const response = await axios(requestObj);
    if (response.data.code === 401) {
      localStorage.clear();
      window.location.reload();
    } else {
      return response.data;
    }
  } catch (error) {
    let errorObject = error.response.data;
    if (error?.response?.status === 401) {
      let token = localStorage.getItem("token");
      localStorage.clear();
      if (token) {
        window.location.reload();
      }
    }
    if (errorObject) {
      return errorObject;
    } else {
      return {
        code: 400,
        message: "Somthing Went Wrong. Please Check Your Server",
      };
    }
  }
};
