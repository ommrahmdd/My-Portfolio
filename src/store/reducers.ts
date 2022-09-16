import { IProject } from "./../models/IProject";
let INITIAL_STATE: {
  projects: IProject[];
} = {
  projects: [],
};

type actionType = {
  type: string;
  payload?: {};
};

export let getProjectsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return {
        projects: action.payload,
      };
    default:
      return state;
  }
};
