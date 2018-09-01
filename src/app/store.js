import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import hotels from "./reducers/hotels";

export default createStore(
    hotels,
    applyMiddleware( createLogger(), thunk, promise())
);