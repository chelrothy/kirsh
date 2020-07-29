import { combineReducers } from "redux";

import review from "./review";
import ranking from "./ranking";
import store from "./store";
import auth from "./auth";
import createProduct from "./createProduct";

const rootReducer = combineReducers({
  review,
  ranking,
  store,
  auth,
  createProduct
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
