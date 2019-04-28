import { rootReducer } from "./appReducers";
import { createStore } from "redux";

export const appStore = createStore(rootReducer);