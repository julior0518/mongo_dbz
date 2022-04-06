import { combineReducers } from "redux";
import testReducer from './testReducer'

const reducers = combineReducers ({
    testR: testReducer
}) 

export default reducers;