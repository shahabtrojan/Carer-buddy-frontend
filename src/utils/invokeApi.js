import axios from "axios";
export const BASE_URL = "";
export const invokeApi = async (
  {url,
  method = "GET",
  headers = {
    "Content-Type": "application/json",
  },
  payload = {}
}) => {
  try {
    const requestObj = {
      method: method,
      url: BASE_URL + url,
      headers: headers,
      data: payload,
    };
    const response = await axios(requestObj);
    if (response.data.code === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return response.data;
  } catch (error) {
    return error;
  }
};
