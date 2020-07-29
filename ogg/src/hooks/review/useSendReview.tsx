import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { RootState } from "./../../modules";
import { postStoreReview } from "./../../lib/api/store";
import { initReview } from "./../../modules/review";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useSendReview() {
  const dispatch = useDispatch();

  const storeIDState = typedUseSelector((state: RootState) => state.store.id);
  const reviewState = typedUseSelector(
    (state: RootState) => state.review.review
  );

  const sendStoreReview = async () => {
    try {
      await postStoreReview(storeIDState, reviewState);
      dispatch(initReview());
    } catch (error) {
      console.log(error);
    }
  };

  return sendStoreReview;
}
