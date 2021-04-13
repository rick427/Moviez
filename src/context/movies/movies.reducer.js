import { 
    GET_ALL_MOVIES_REQUEST, 
    GET_ALL_MOVIES_SUCCESS, 
    GET_ALL_MOVIES_FAILED, 
    GET_MOVIE_REQUEST, 
    GET_MOVIE_SUCCESS, 
    GET_MOVIE_FAILED 
} from '../types';

const MoviesReducer = (state, action) => {
    switch (action.type) {
        case GET_MOVIE_REQUEST:
        case GET_ALL_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_MOVIES_SUCCESS:
            localStorage.setItem('index-movie', JSON.stringify(action.payload[state.movieIndex].backdrop_path))
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movie: action.payload
            }
        case GET_MOVIE_FAILED:
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