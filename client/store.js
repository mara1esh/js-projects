import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));
export default store;