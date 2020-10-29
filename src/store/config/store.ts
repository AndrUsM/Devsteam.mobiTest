import { applyMiddleware, createStore } from 'redux';
import { appReducer } from './reducers';
import thunk from "redux-thunk";

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}

export const store = createStore(
    rootReducer, applyMiddleware(thunk)
)