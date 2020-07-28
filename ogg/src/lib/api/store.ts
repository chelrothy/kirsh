import axios from "axios";

import baseURL from "./baseURL";

export const getStoreInfo = async (id: number) => {
  return await axios.get(`${baseURL}/${id}`, {
    headers: { "Content-Type": "application/json" }
  });
};
