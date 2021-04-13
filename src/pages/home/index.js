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
        JSON.parse(localStorage.getItem('index-movie'))
    );

    console.log(movies);

    return (
        <StyledWrapper url={url}>
            <article className="banner">
                <div className="banner-info">
                    <p className="banner-info-subheading">New releases</p>
                    <h1 className="banner-info-heading">{movies?.[0]?.title}</h1>

                    <p className="banner-info-text">
                        {movies?.[0]?.overview}
                    </p>
                </div>
            </article>

            <div style={{height: '150vh',}}></div>
        </StyledWrapper>
    )
}

export default Home;
