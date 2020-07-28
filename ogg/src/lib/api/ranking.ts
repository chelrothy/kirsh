import axios from "axios";

import baseURL from "./baseURL";

export const getRanking = async (search: string) => {
  return await axios.get(`${baseURL}/store/ranking`, {
    headers: {
      "Content-Type": "application/json"
    },
    params: { search: search }
  });
};
