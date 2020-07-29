import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useCallback } from "react";

import { openModal, closeModal } from "./../../modules/createStore";
import { RootState } from "./../../modules";

const typedUseSeletor: TypedUseSelectorHook<RootState> = useSelector;

export default function useCreateStoreModal() {
  const dispatch = useDispatch();

  const isOpen = typedUseSeletor(
    (state: RootState) => state.createStore.isOpen
  );

  const setModalOpened = useCallback(() => dispatch(openModal()), [dispatch]);
  const setModalClosed = useCallback(() => dispatch(closeModal()), [dispatch]);

  return { isOpen, setModalClosed, setModalOpened };
}
