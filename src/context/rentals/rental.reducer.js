import { 
  USER_RENTS_MOVIE,
  USER_RETURNS_MOVIE
} from '../types';

const RentalReducer = (state, action) => {
    switch (action.type) {
        case USER_RENTS_MOVIE:
            return {
                ...state,
                rentals: [...state.rentals, action.payload]
            }
        case USER_RETURNS_MOVIE:
            return {
                ...state,
                rentals: [...state.rentals].filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default RentalReducer;