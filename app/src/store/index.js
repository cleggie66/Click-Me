import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import clicks from "./clicks"

const rootReducer = combineReducers({
    clicks
});

const logger = require("redux-logger").default;
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

export const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;