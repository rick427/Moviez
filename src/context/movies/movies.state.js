import React, {useReducer} from "react";
import axios from 'axios';
import MoviesContext from './movies.context';
import MoviesReducer from './movies.reducer';
import { GET_ALL_MOVIES_REQUEST, GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_FAILED } from '../types';

const MoviesStateProvider = props => {
    const initialState = {
        movies: [],
        error: '',
        loading: false,
    }

    const [state, dispatch] = useReducer(MoviesReducer, initialState);

    return (
        <MoviesContext.Provider
          value={{
            movies: state.movies,
            loading: state.loading,
            error: state.error
          }}
        >
            {props.children}
        </MoviesContext.Provider>
    )
}

export default MoviesStateProvider;