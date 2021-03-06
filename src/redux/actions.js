import actions from './action-types';
import network from "../network/network-client";

export function setMovies (movies){
    return {type: actions.SET_MOVIES, payload: movies};
}

export const getMovies = params => async dispatch => {
    try {
        const response = await network.get(
            'discover/movie',
            params,
        )
        dispatch(setMovies(response.results));
    } catch (error) {
        console.log(error);
    }
}

export function setSelectedYear (year){
    return {type: actions.SET_SELECTED_YEAR, payload: year};
}

export function setSelectedGenres (genres){
    return {type: actions.SET_SELECTED_GENRES, payload: genres};
}