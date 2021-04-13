import { GET_ALL_MOVIES_REQUEST, GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_FAILED } from '../types';

const MoviesReducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_MOVIES_SUCCESS:
            localStorage.setItem('index-movie', JSON.stringify(action.payload[0].backdrop_path))
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        case GET_ALL_MOVIES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default MoviesReducer;