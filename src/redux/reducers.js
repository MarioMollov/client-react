import actionTypes from "./actionTypes";
import { combineReducers } from "redux";

function statistics(state = {}, action){
    switch(action.type) {
        case actionTypes.SET_STATISTICS: {
            return {...state, ...action.payload}
        }
        default:
            return state;
    }
}

function additionalInfo(state = 
    {"total-cases": false,
    "total-tests": false,
    "total-death-cases": false}, 
    action){
    switch(action.type) {
        case actionTypes.SET_STATISTICS: {
            return {...state, 
                ...action.payload}
        }
        default:
            return state;
    }
}

function isListView(state = false, action){
    switch(action.type) {
        case actionTypes.SET_LIST_VIEW: {
            return action.payload
        }
        default:
            return state;
    }
}

export default combineReducers({statistics, additionalInfo, isListView});