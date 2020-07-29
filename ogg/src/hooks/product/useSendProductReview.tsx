import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

import { RootState } from "./../../modules";
import { postProductReview } from "./../../lib/api/store";
import { initReview } from "./../../modules/review";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useSendProductReview(product: number) {
  const dispatch = useDispatch();

  const storeIDState = typedUseSelector((state: RootState) => state.store.id);
  const reviewState = typedUseSelector(
    (state: RootState) => state.review.review
  );

  const sendStoreReview = async () => {
    try {
      await postProductReview(storeIDState, product, reviewState);
      dispatch(initReview());
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return sendStoreReview;
}
