import axios from "axios";

import baseURL from "./baseURL";

type AuthResponse = {
  name: string;
  access_token: string;
};

export const login = async ({
  id,
  password
}: {
  id: string;
  password: string;
}) => {
  return await axios.post<AuthResponse>(
    `${baseURL}/login`,
    { id, password },
    {
      headers: { "Content-Type": "application/json" }
    }
  );
};
