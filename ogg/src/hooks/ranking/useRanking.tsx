import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useEffect } from "react";

import { RootState } from "./../../modules";
import { updateRanking } from "./../../modules/ranking";
import { getRanking } from "./../../lib/api/ranking";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useRanking() {
  const dispatch = useDispatch();

  const rankingState = typedUseSelector((state: RootState) => state.ranking);

  const setRankingState = async () => {
    try {
      const response = await getRanking(rankingState.search);

      dispatch(updateRanking(response.data));
    } catch (error) {
      console.log(error);
      dispatch(updateRanking([]));
    }
  };

  useEffect(() => {
    setRankingState();
  }, [rankingState.search]);

  return rankingState.ranking;
}
