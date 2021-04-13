import { GET_MOVIE_CONFIG_REQUEST, GET_MOVIE_CONFIG_SUCCESS, GET_MOVIE_CONFIG_FAILED } from '../types';

const ConfigReducer = (state, action) => {
    switch (action.type) {
        case GET_MOVIE_CONFIG_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_MOVIE_CONFIG_SUCCESS:
            return {
                ...state,
                loading: false,
                config: action.payload
            }
        case GET_MOVIE_CONFIG_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default ConfigReducer;