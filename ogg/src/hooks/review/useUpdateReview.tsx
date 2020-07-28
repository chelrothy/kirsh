import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { updateContent } from "./../../modules/review";
import { useCallback } from "react";
import { RootState } from "../../modules";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useUpdateReview() {
  const dispatch = useDispatch();

  const reviewState = typedUseSelector(
    (state: RootState) => state.review.review.content
  );
  const updateReview = useCallback(
    content => dispatch(updateContent(content)),
    [dispatch]
  );

  return { reviewState, updateReview };
}
