import { combineReducers } from "redux";

import review from "./review";
import ranking from "./ranking";
import store from "./store";

const rootReducer = combineReducers({ review, ranking, store });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
