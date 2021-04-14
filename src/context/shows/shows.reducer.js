import { 
  GET_SHOWS_REQUEST, 
  GET_SHOWS_SUCCESS, 
  GET_SHOWS_FAILED,
  GET_SHOW_REQUEST,
  GET_SHOW_SUCCESS,
  GET_SHOW_FAILED,
  GET_SHOW_ACTORS_REQUEST,
  GET_SHOW_ACTORS_SUCCESS,
  GET_SHOW_ACTORS_FAILED,
} from '../types';

const ShowsReducer = (state, action) => {
    switch (action.type) {
        case GET_SHOW_REQUEST:
        case GET_SHOWS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_SHOW_ACTORS_REQUEST:
            return {
                ...state,
                castsLoading: true
            }
        case GET_SHOWS_SUCCESS:
            const newShows = action.payload.map(item => {
                item.stock = 2;
                return item;
            });
            return {
                ...state,
                loading: false,
                shows: newShows
            }
        case GET_SHOW_SUCCESS:
            return {
                ...state,
                loading: false,
                show: action.payload
            }
        case GET_SHOW_ACTORS_SUCCESS:
            return {
                ...state,
                castsLoading: false,
                casts: action.payload
            }
        case GET_SHOW_FAILED:
        case GET_SHOWS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_SHOW_ACTORS_FAILED:
            return {
                ...state,
                castsLoading: false,
                castsError: action.payload
            }
        default:
            return state;
    }
}

export default ShowsReducer;