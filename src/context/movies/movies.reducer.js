import { GET_ALL_MOVIES_REQUEST, GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_FAILED } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_ALL_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_MOVIES_SUCCESS:
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