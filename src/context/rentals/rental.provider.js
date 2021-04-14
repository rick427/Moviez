import React, {useReducer} from "react";

import RentalContext from './rental.context';
import RentalReducer from './rental.reducer';
import { 
  USER_RENTS_MOVIE,
  USER_RETURNS_MOVIE
} from '../types';

const RentalContextProvider = props => {
  const initialState = {
    rentals: [],
  }

  const [state, dispatch] = useReducer(RentalReducer, initialState);

  const rentMovie = (movie) => {
    dispatch({ type: USER_RENTS_MOVIE, payload: movie});
  }

  const returnMovie = (movie) => {
    dispatch({ type: USER_RETURNS_MOVIE, payload: movie});
  }

  return (
    <RentalContext.Provider
      value={{
        rentals: state.rentals,
        rentMovie,
        returnMovie
      }}
    >
      {props.children}
    </RentalContext.Provider>
  );
}

export default RentalContextProvider;