import { combineReducers } from "redux";

import review from "./review";
import ranking from "./ranking";
import store from "./store";
import auth from "./auth";
import createProduct from "./createProduct";
import createStore from "./createStore";
import signup from "./signup";

const rootReducer = combineReducers({
  review,
  ranking,
  store,
  auth,
  createProduct,
  createStore,
  signup
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
