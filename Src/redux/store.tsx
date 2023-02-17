import {  combineReducers} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import {  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import CountReducer from './Reducer';
import Reducer from './countReducer';
import Search from './Search'
import AddToFavor from './AddToFavor';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    list: CountReducer ,
    day: Reducer,
    search: Search,
    favor: AddToFavor,
    login: loginReducer
 
    });
    export const store = createStore(rootReducer, applyMiddleware(thunk));