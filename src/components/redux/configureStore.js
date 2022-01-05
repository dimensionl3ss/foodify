import { createForms } from 'react-redux-form';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Chefs } from './chefs';
import { Auth } from './auth';
import { InitialFeedback, IntitialRegForm } from './form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            chefs: Chefs,
            auth: Auth,
            ...createForms({
                feedback: InitialFeedback,
                user: IntitialRegForm
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}