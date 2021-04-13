import React, {useEffect, useContext} from 'react';

import { StyledWrapper } from './home.styles';
import MoviesContext from '../../context/movies/movies.context';

const Home = () => {
    const {movies, loading, getMovies} = useContext(MoviesContext);

    useEffect(() => {
        //getMovies();
        //eslint-disable-next-line
    }, []);

    return (
        <StyledWrapper>
            HOME PAGE
        </StyledWrapper>
    )
}

export default Home;
