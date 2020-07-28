import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { useCallback } from "react";

import { RootState } from "../../modules";
import { updateScore } from "../../modules/review";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useUpdateScore() {
  const dispatch = useDispatch();

  const starState = typedUseSelector(
    (state: RootState) => state.review.review.score
  );
  const updateStar = useCallback(score => dispatch(updateScore(score)), [
    dispatch
  ]);

  return { starState, updateStar };
}
