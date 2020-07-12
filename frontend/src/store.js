import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    (applyMiddleware(...middleware))
);

let currentState = store.getState();

store.subscribe(() => {
    let previousState = currentState;
    currentState = store.getState();
});

export default store;
