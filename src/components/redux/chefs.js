import * as ActionTypes from "./ActionTypes";
export const Chefs = (
  state = {
    chefs: [],
    error: null,
    isLoading: true,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.CHEFS_LOADING:
      return { ...state, chefs: [], isLoading: true, error: null };

    case ActionTypes.ADD_CHEFS:
      return {
        ...state,
        chefs: action.payload,
        isLoading: false,
        error: null,
      };

    case ActionTypes.CHEFS_FAILED:
      return {
        ...state,
        chefs: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
