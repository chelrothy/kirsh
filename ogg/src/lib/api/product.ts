import axios from "axios";

import baseURL from "./baseURL";
import { getToken } from "./../token";

export const postProduct = async (id: number, formData: FormData) => {
  return await axios.post(`${baseURL}/${id}/product`, formData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data"
    }
  });
};
