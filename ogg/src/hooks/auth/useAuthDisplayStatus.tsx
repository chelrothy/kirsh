import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "../../modules";

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useAuthDisplayStatus() {
  return typedUseSelector((state: RootState) => state.auth.isOpen);
}
