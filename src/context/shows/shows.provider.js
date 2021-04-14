import React, {useReducer} from "react";
import axios from 'axios';

import ShowsContext from './shows.context';
import ShowsReducer from './shows.reducer';
import { ACCESS_KEY } from "../../utils/helpers";
import { 
  GET_SHOWS_REQUEST, 
  GET_SHOWS_SUCCESS, 
  GET_SHOWS_FAILED,
  GET_SHOW_REQUEST,
  GET_SHOW_SUCCESS,
  GET_SHOW_FAILED,
  GET_SHOW_ACTORS_REQUEST,
  GET_SHOW_ACTORS_SUCCESS,
  GET_SHOW_ACTORS_FAILED
} from '../types';

const ShowsContextProvider = props => {
  const initialState = {
    show: {},
    shows: null,
    casts: {},
    castsLoading: false,
    error: '',
    castsError: '',
    loading: false,
  }

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const getShows = async (page = 1) => {
    try {
      dispatch({ type: GET_SHOWS_REQUEST });
      const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${ACCESS_KEY}&language=en-US&page=${page}`);
      dispatch({ type: GET_SHOWS_SUCCESS, payload: res.data.results});
    } 
    catch (err) {
      dispatch({
        type: GET_SHOWS_FAILED, 
        payload: err.response && err.response.data.message?.err.message
      })
    }
  } 

  const getShow = async (showId) => {
    try {
      dispatch({ type: GET_SHOW_REQUEST });
      const res = await axios.get(`https://api.themoviedb.org/3/tv/${showId}?api_key=${ACCESS_KEY}&language=en-US`);
      dispatch({ type: GET_SHOW_SUCCESS, payload: res.data});
    } 
    catch (err) {
      dispatch({
        type: GET_SHOW_FAILED, 
        payload: err.response && err.response.data.message?.err.message
      })
    }
  } 

  const getShowCasts = async (showId) => {
    try {
      dispatch({ type: GET_SHOW_ACTORS_REQUEST });
      const res = await axios.get(`https://api.themoviedb.org/3/tv/${showId}/credits?api_key=${ACCESS_KEY}&language=en-US`);
      dispatch({ type: GET_SHOW_ACTORS_SUCCESS, payload: res.data});
    } 
    catch (err) {
      dispatch({
        type: GET_SHOW_ACTORS_FAILED, 
        payload: err.response && err.response.data.message?.err.message
      })
    }
  } 

  return (
    <ShowsContext.Provider
      value={{
        casts: {},
        show: state.show,
        shows: state.shows,
        showsLoading: state.loading,
        castsLoading: state.castsLoading,
        error: state.error,
        getShows,
        getShow,
        getShowCasts
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
}

export default ShowsContextProvider;