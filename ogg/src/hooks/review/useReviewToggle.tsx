import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { useCallback } from "react";

import { RootState } from "../../modules";
import { openReview, closeReview, initReview } from "./../../modules/review";
import { getToken } from "./../../lib/token";
import useAuthOpen from "./../auth/useAuthOpen";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useReviewToggle() {
  const openAuth = useAuthOpen();
  const dispatch = useDispatch();

  const toggleState = typedUseSelector(
    (state: RootState) => state.review.isOpen
  );
  const changeToggle = useCallback(() => {
    if (toggleState) return dispatch(closeReview());
    if (!getToken()) return openAuth();
    dispatch(initReview());
    return dispatch(openReview());
  }, [dispatch, toggleState]);

  return { toggleState, changeToggle };
}
