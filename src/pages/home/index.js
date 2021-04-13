import React, {useEffect, useContext} from 'react';

import { StyledWrapper } from './home.styles';
import { parseImageUrl } from '../../utils/helpers';
import Rating from '../../components/common/Rating';
import Button from '../../components/common/Button';
import Spinner from '../../components/common/Spinner';
import useMovieConfig from '../../hooks/useMovieConfig';
import MoviesContext from '../../context/movies/movies.context';

const Home = () => {
    const {movies, movieIndex, loading, getMovies} = useContext(MoviesContext);
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

    return (
        <StyledWrapper url={url}>
            <article className="banner">
                <div className="banner-info">
                    <p className="banner-info-subheading">New releases</p>
                    <h1 className="banner-info-heading">{movies?.[movieIndex]?.title}</h1>

                    <div className="banner-info-row">
                        <Rating 
                            rating={movies?.[movieIndex]?.vote_average} 
                            releaseDate={movies?.[movieIndex]?.release_date}
                        />
                    </div>
                    <p className="banner-info-text">{movies?.[movieIndex]?.overview}</p>

                    <Button>
                        Rent Now
                    </Button>
                </div>
            </article>

            <article className="streaming">
                <div className="streaming-info">
                    <p className="streaming-info-subheading">online streaming</p>
                    <h1 className="streaming-info-heading">watch shows online</h1>
                </div>
            </article>
        </StyledWrapper>
    )
}

export default Home;
