import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useCallback } from "react";

import { RootState } from "./../../modules";
import { updateSearch } from "./../../modules/ranking";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useRankingSearch() {
  const dispatch = useDispatch();

  const searchState = typedUseSelector(
    (state: RootState) => state.ranking.search
  );
  const changeSearch = useCallback(search => dispatch(updateSearch(search)), [
    dispatch
  ]);

  return { searchState, changeSearch };
}
