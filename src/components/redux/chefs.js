import * as ActionTypes from "./ActionTypes";
export const Chefs = (
  state = {
    chefs: [],
    error: null,
  },
  action
) => {
  switch (action.type) {

    case ActionTypes.ADD_CHEFS:
      return {
        ...state,
        chefs: action.payload,
        error: null,
      };

    case ActionTypes.CHEFS_FAILED:
      return {
        ...state,
        chefs: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
