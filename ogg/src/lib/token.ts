export const setToken = (token: string) => {
  localStorage.setItem("ogg_token", token);
};

export const getToken = () => {
  const token = localStorage.getItem("ogg_token");

  if (token) {
    return token;
  } else {
    console.log("no token");
    return;
  }
};

export const removeToken = () => {
  localStorage.removeItem("ogg_token");
};
