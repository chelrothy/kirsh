import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useCallback } from "react";

import { RootState } from "./../../modules";
import { convertStatus } from "./../../modules/auth";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useAuthState() {
  const dispatch = useDispatch();
  const status = typedUseSelector((state: RootState) => state.auth.status);

  const changeStatus = useCallback(() => dispatch(convertStatus()), [dispatch]);

  return { status, changeStatus };
}
