import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { useCallback } from "react";

import { RootState } from "../../modules";
import { updateScore } from "../../modules/createStore";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useUpdateStoreStar() {
  const dispatch = useDispatch();

  const starState = typedUseSelector(
    (state: RootState) => state.createStore.score
  );
  const updateStar = useCallback(score => dispatch(updateScore(score)), [
    dispatch
  ]);

  return { starState, updateStar };
}
