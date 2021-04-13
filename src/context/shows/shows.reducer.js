import { 
  GET_SHOWS_REQUEST, 
  GET_SHOWS_SUCCESS, 
  GET_SHOWS_FAILED,
  GET_SHOW_REQUEST,
  GET_SHOW_SUCCESS,
  GET_SHOW_FAILED
} from '../types';

const ShowsReducer = (state, action) => {
    switch (action.type) {
        case GET_SHOW_REQUEST:
        case GET_SHOWS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_SHOWS_SUCCESS:
            return {
                ...state,
                loading: false,
                shows: action.payload
            }
        case GET_SHOW_SUCCESS:
            return {
                ...state,
                loading: false,
                show: action.payload
            }
        case GET_SHOW_FAILED:
        case GET_SHOWS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default ShowsReducer;