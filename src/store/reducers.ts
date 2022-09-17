import { IProject } from "./../models/IProject";
let INITIAL_STATE: {
  projects: IProject[];
} = {
  projects: [],
};

let GUEST_STATE = {
  visit: false,
};

export let getProjectsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};

export let checkForGuestReducer = (state = GUEST_STATE, action: any) => {
  switch (action.type) {
    case "SET_GUEST":
      return {
        visit: true,
      };
    default:
      return state;
  }
};
