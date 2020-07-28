import { combineReducers } from "redux";

import review from "./review";
import ranking from "./ranking";

const rootReducer = combineReducers({ review, ranking });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
