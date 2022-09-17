import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProjectsReducer, checkForGuestReducer } from "./reducers";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
export let store = createStore(
  combineReducers({
    projects: getProjectsReducer,
    guest: checkForGuestReducer,
  }),
  // getProjectsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
