import React, {useReducer} from "react";
import axios from 'axios';
import ConfigContext from './config.context';
import ConfigReducer from './config.reducer';
import { GET_MOVIE_CONFIG_REQUEST, GET_MOVIE_CONFIG_SUCCESS, GET_MOVIE_CONFIG_FAILED } from '../types';

const ConfigContextProvider = props => {
  const initialState = {
    configs: {},
    error: '',
    loading: false,
  }

  const [state, dispatch] = useReducer(ConfigReducer, initialState);

  const getMovieConfigs = async () => {
    try {
      dispatch({ type: GET_MOVIE_CONFIG_REQUEST });
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_ACCESS_KEY}&language=en-US&page=${page}`);
      dispatch({ type: GET_MOVIE_CONFIG_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: GET_MOVIE_CONFIG_FAILED, 
        payload: err.response ?? err.response.data.message?.err.message
      })
    }
  } 

  return (
    <ConfigContext.Provider
      value={{
        configs: state.configs,
        loading: state.loading,
        error: state.error,
        getMovieConfigs
      }}
    >
      {props.children}
    </ConfigContext.Provider>
  );
}

export default ConfigContextProvider;