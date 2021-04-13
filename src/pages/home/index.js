import React, {useEffect, useContext} from 'react';

import { StyledWrapper } from './home.styles';
import { parseImageUrl } from '../../utils/helpers';
import Spinner from '../../components/common/Spinner';
import useMovieConfig from '../../hooks/useMovieConfig';
import MoviesContext from '../../context/movies/movies.context';

const Home = () => {
    const {movies, loading, getMovies} = useContext(MoviesContext);
    const {config, configLoading} = useMovieConfig();

    useEffect(() => {
        getMovies();
        //eslint-disable-next-line
    }, []);

    if(loading || configLoading){
        return <Spinner/>
    }

    const url = parseImageUrl(
        config?.images?.secure_base_url, 
        config?.images?.backdrop_sizes[3], 
        movies?.results[0]?.backdrop_path
    );

    return (
        <StyledWrapper url={url}>
            HOME PAGE
        </StyledWrapper>
    )
}

export default Home;
