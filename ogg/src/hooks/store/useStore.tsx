import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useEffect } from "react";

import { RootState } from "./../../modules";
import { initStore, updateStore } from "./../../modules/store";
import { getStoreInfo } from "./../../lib/api/store";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useStore(id: number) {
  const dispatch = useDispatch();

  const rankingState = typedUseSelector((state: RootState) => state.store);

  const setStoreState = async () => {
    dispatch(initStore());
    try {
      const response = await getStoreInfo(id);

      dispatch(updateStore(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setStoreState();
  }, []);

  return rankingState;
}
