import React, {useEffect, useContext} from 'react';

import { StyledWrapper } from './home.styles';
import useMovieConfig from '../../hooks/useMovieConfig';
import MoviesContext from '../../context/movies/movies.context';

const Home = () => {
    const {config, loading: configLoading} = useMovieConfig();
    const {movies, loading, getMovies} = useContext(MoviesContext);

    useEffect(() => {
        getMovies();
        //eslint-disable-next-line
    }, []);

    return (
        <StyledWrapper>
            HOME PAGE
        </StyledWrapper>
    )
}

export default Home;
