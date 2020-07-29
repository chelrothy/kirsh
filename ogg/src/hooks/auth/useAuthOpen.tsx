import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { openAuth } from "./../../modules/auth";

export default function useAuthOpen() {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(openAuth()), [dispatch]);
}
