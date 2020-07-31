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

export const signup = async ({
  id,
  password,
  name
}: {
  id: string;
  password: string;
  name: string;
}) => {
  return await axios.post(
    `${baseURL}/signup`,
    { id, password, name },
    {
      headers: { "Content-Type": "application/json" }
    }
  );
};
