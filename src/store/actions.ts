import { getProjects } from "../firebase/config";
import { Dispatch } from "redux";
export let getProjectsAction = (payload: {}) => {
  return {
    type: "GET_PROJECTS",
    payload: payload,
  };
};

export let getProjectsFromDB = () => {
  return async (dispatch: Dispatch<any>) => {
    return getProjects().then((projects) => {
      dispatch(getProjectsAction(projects));
    });
  };
};

export let setGuest = () => {
  return {
    type: "SET_GUEST",
  };
};
