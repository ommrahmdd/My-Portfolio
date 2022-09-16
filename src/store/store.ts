import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProjectsReducer } from "./reducers";
import thunk from "redux-thunk";
export let store = createStore(
  getProjectsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
