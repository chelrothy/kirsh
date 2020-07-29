import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { closeAuth } from "../../modules/auth";

export default function useAuthclose() {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(closeAuth()), [dispatch]);
}
