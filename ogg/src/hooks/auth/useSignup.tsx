import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import { RootState } from "../../modules";
import { changeInput, initializeInput } from "../../modules/signup";
import { signup } from "../../lib/api/auth";
import useAuthClose from "./useAuthClose";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useSignup() {
  const closeAuth = useAuthClose();
  const dispatch = useDispatch();
  const signupInfo = typedUseSelector((state: RootState) => state.signup.form);

  const onChange = (name: "id" | "password" | "name", value: string) => {
    dispatch(changeInput({ name, value }));
  };

  const postSignupInfo = async () => {
    try {
      const response = await signup(signupInfo);

      if (response.status === 201) {
        dispatch(initializeInput());
        closeAuth();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { signupInfo, onChange, postSignupInfo };
}
