import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";

const middleware = [logger];
const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnhancers);
