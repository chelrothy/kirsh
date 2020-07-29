import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { useCallback } from "react";

import { RootState } from "./../../modules";
import {
  updateAveragePrice,
  updateDescription,
  updatePicture,
  updateStoreName,
  closeModal
} from "../../modules/createStore";
import { postNewStore } from "./../../lib/api/store";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useCreateStore() {
  const dispatch = useDispatch();
  const storeState = typedUseSelector((state: RootState) => state.createStore);

  const submitNewStore = async () => {
    try {
      const formData = new FormData();
      formData.append("store_name", storeState.store_name);
      formData.append("description", storeState.description);
      formData.append("score", `${storeState.score}`);
      formData.append("average_price", `${storeState.average_price}`);
      formData.append("picture", storeState.picture);
      await postNewStore(formData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const setStoreName = useCallback(name => dispatch(updateStoreName(name)), [
    dispatch
  ]);
  const setDescription = useCallback(
    description => dispatch(updateDescription(description)),
    [dispatch]
  );
  const setAveragePrice = useCallback(
    price => dispatch(updateAveragePrice(price)),
    [dispatch]
  );
  const setPicture = useCallback(
    description => dispatch(updatePicture(description)),
    [dispatch]
  );
  const setModalClosed = useCallback(() => dispatch(closeModal()), [dispatch]);

  return {
    setStoreName,
    setDescription,
    setAveragePrice,
    setPicture,
    submitNewStore,
    setModalClosed
  };
}
