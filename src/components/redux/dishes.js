import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {     
    errMess: null,
    dishes:[]}, action) => {   //simpler reducer function
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};