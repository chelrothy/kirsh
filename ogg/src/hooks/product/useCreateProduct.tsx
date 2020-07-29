import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useCallback } from "react";

import { RootState } from "./../../modules";
import {
  updateProductName,
  updatePicture
} from "./../../modules/createProduct";
import { postProduct } from "./../../lib/api/product";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useCreateProduct() {
  const storeID = typedUseSelector((state: RootState) => state.store.id);
  const formState = typedUseSelector((state: RootState) => state.createProduct);
  const dispatch = useDispatch();

  const submitNewProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("product_name", formState.product_name);
      formData.append("picture", formState.picture);
      await postProduct(storeID, formData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const setProductName = useCallback(
    name => dispatch(updateProductName(name)),
    [dispatch]
  );

  const setPicture = useCallback(picture => dispatch(updatePicture(picture)), [
    dispatch
  ]);

  return { submitNewProduct, setProductName, setPicture };
}
