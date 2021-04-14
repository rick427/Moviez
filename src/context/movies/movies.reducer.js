import { 
    GET_ALL_MOVIES_REQUEST, 
    GET_ALL_MOVIES_SUCCESS, 
    GET_ALL_MOVIES_FAILED, 
    GET_MOVIE_REQUEST, 
    GET_MOVIE_SUCCESS, 
    GET_MOVIE_FAILED,
    GET_MOVIE_ACTORS_REQUEST,
    GET_MOVIE_ACTORS_SUCCESS,
    GET_MOVIE_ACTORS_FAILED,
    DECREASE_STOCK,
    INCREASE_STOCK
} from '../types';

const MoviesReducer = (state, action) => {
    switch (action.type) {
        case GET_MOVIE_REQUEST:
        case GET_ALL_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_MOVIE_ACTORS_REQUEST:
            return {
                ...state,
                castsLoading: true
            }
        case GET_ALL_MOVIES_SUCCESS:
            const movies = action.payload.map(item => {
                item.stock = 2;
                return item;
            });
            localStorage.setItem('index-movie', JSON.stringify(action.payload[state.movieIndex].backdrop_path));
            if(localStorage.getItem('new-movies')){
                return {
                    ...state,
                    loading: false,
                    movies: JSON.parse(localStorage.getItem('new-movies'))
                }
            }
            else{
                return {
                    ...state,
                    loading: false,
                    movies
                }
            }
        case GET_MOVIE_ACTORS_SUCCESS:
            return {
                ...state,
                castsLoading: false,
                casts: action.payload
            }
        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movie: action.payload
            }
        case DECREASE_STOCK:
            const movieIndex = state.movies.findIndex(item => item.id === action.payload.id);
            let updatedMovies = [...state.movies];
            updatedMovies[movieIndex].stock -=1;
            localStorage.setItem('new-movies', JSON.stringify(updatedMovies));
            return {
                ...state,
                movies: updatedMovies
            }
        case INCREASE_STOCK:
            const newIndex = state.movies.findIndex(item => item.id === action.payload.id);
            let newMovies = [...state.movies];
            newMovies[newIndex].stock +=1;
            localStorage.setItem('new-movies', JSON.stringify(newMovies));
            return {
                ...state,
                movies: newMovies
            }
        case GET_MOVIE_FAILED:
        case GET_ALL_MOVIES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_MOVIE_ACTORS_FAILED:
            return {
                ...state,
                castsLoading: false,
                castsError: action.payload
            }
        default:
            return state;
    }
}

export default MoviesReducer;