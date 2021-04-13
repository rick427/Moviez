import React, {useReducer} from "react";
import axios from 'axios';

import MoviesContext from './movies.context';
import MoviesReducer from './movies.reducer';
import { ACCESS_KEY } from "../../utils/helpers";
import { GET_ALL_MOVIES_REQUEST, GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_FAILED } from '../types';

const MoviesContextProvider = props => {
  const initialState = {
    movies: null,
    error: '',
    loading: false,
  }

  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  const getMovies = async (page = 1) => {
    try {
      dispatch({ type: GET_ALL_MOVIES_REQUEST });
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${ACCESS_KEY}&language=en-US&page=${page}`);
      dispatch({ type: GET_ALL_MOVIES_SUCCESS, payload: res.data.results});
    } 
    catch (err) {
      dispatch({
        type: GET_ALL_MOVIES_FAILED, 
        payload: err.response && err.response.data.message?.err.message
      })
    }
  } 

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        loading: state.loading,
        error: state.error,
        getMovies
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;