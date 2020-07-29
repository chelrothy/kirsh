import { combineReducers } from "redux";

import review from "./review";
import ranking from "./ranking";
import store from "./store";
import auth from "./auth"

const rootReducer = combineReducers({ review, ranking, store, auth });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
