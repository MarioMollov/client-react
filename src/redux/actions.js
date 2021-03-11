import actionTypes from "./actionTypes";
import networkClient from "../network/networkClient";

export function setStatistics(statistics) {
    return {type: actionTypes.SET_STATISTICS, payload: statistics};
}

export const getStatistics = (params) => async function(dispatch){
    try {
        const mResponse = await networkClient.get(
            "history",
            params
        )
        dispatch(setStatistics(mResponse.response[0]));
    } catch (e) {
        console.log(e);
    }
}

export function setAdditionalInfo(additionalInfo) {
    return {type: actionTypes.SET_ADDITIONAL_INFO, payload: additionalInfo};
}

export function setListView(isListView) {
    return {type: actionTypes.SET_LIST_VIEW, payload: isListView};
}