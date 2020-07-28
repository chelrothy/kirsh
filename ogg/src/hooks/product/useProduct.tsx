import { useSelector, TypedUseSelectorHook } from "react-redux";
import { useEffect } from "react";

import { RootState } from "./../../modules";
import { initialState } from "./../../modules/store";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useProduct(product: number) {
  const productState = typedUseSelector(
    (state: RootState) => state.store.products
  );

  for (let i in productState) {
    if (product === productState[i].product_id) return productState[i];
  }

  return initialState.products[0];
}
