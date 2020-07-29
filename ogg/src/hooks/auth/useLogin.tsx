import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import { RootState } from "./../../modules";
import { changeInput, initializeInput } from "./../../modules/auth";
import { setToken } from "./../../lib/token";
import { login } from "./../../lib/api/auth";
import useAuthClose from "./useAuthClose";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useLogin() {
  const closeAuth = useAuthClose();
  const dispatch = useDispatch();
  const authInfo = typedUseSelector((state: RootState) => state.auth.form);

  const onChange = (name: "id" | "password", value: string) => {
    dispatch(changeInput({ name, value }));
  };

  const postAuthInfo = async () => {
    try {
      const response = await login(authInfo);

      if (response.status === 200) {
        setToken(response.data.access_token);
        dispatch(initializeInput());
        closeAuth();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { authInfo, onChange, postAuthInfo };
}
