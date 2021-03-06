import React, {useReducer} from "react";
import axios from 'axios';

import MoviesContext from './movies.context';
import MoviesReducer from './movies.reducer';
import { ACCESS_KEY } from "../../utils/helpers";
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

const MoviesContextProvider = props => {
  const initialState = {
    casts: null,
    movie: {},
    movies: null,
    error: '',
    loading: false,
    castsLoading: false,
    movieIndex: Math.floor(Math.random() * 20)
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

  const getMovie = async (movieId) => {
    try {
      dispatch({ type: GET_MOVIE_REQUEST });
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${ACCESS_KEY}&language=en-US`);
      dispatch({ type: GET_MOVIE_SUCCESS, payload: res.data});
    } 
    catch (err) {
      dispatch({
        type: GET_MOVIE_FAILED, 
        payload: err.response && err.response.data.message?.err.message
      })
    }
  } 

  const getCasts = async (movieId) => {
    try {
      dispatch({ type: GET_MOVIE_ACTORS_REQUEST });
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${ACCESS_KEY}&language=en-US`);
      dispatch({ type: GET_MOVIE_ACTORS_SUCCESS, payload: res.data.cast});
    } 
    catch (err) {
      dispatch({
        type: GET_MOVIE_ACTORS_FAILED, 
        payload: err.response && err.response.data.message?.err.message
      })
    }
  } 

  const decreaseStock = (movie) => {
    dispatch({ type: DECREASE_STOCK, payload: movie});
  }

  const increaseStock = (movie) => {
    dispatch({ type: INCREASE_STOCK, payload: movie});
  }

  return (
    <MoviesContext.Provider
      value={{
        casts: state.casts,
        movie: state.movie,
        movies: state.movies,
        castsLoading: state.castsLoading,
        moviesLoading: state.loading,
        error: state.error,
        movieIndex: state.movieIndex,
        getMovies,
        getMovie,
        getCasts,
        decreaseStock,
        increaseStock,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;