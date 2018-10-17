import { createStore, compose } from "redux";
import peopleReducer from "./ducks/peopleReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(peopleReducer, composeEnhancers());
