import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { useCallback } from "react";

import { RootState } from "../../modules";
import { openReview, closeReview } from "./../../modules/review";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useReviewToggle() {
  const dispatch = useDispatch();

  const toggleState = typedUseSelector(
    (state: RootState) => state.review.isOpen
  );
  const changeToggle = useCallback(() => {
    if (toggleState) return dispatch(closeReview());
    return dispatch(openReview());
  }, [dispatch, toggleState]);

  return { toggleState, changeToggle };
}
