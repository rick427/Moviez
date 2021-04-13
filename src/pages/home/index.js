import React, {useEffect, useContext} from 'react';

import { parseImageUrl } from '../../utils/helpers';
import useMovieConfig from '../../hooks/useMovieConfig';

import { StyledWrapper } from './home.styles';
import Rating from '../../components/common/Rating';
import Button from '../../components/common/Button';
import Spinner from '../../components/common/Spinner';

import ShowsContext from '../../context/shows/shows.context';
import MoviesContext from '../../context/movies/movies.context';
import ShowsCard from '../../components/common/ShowsCard';

const Home = () => {
    const {shows, getShows, showsLoading} = useContext(ShowsContext);
    const {movies, movieIndex, moviesLoading, getMovies} = useContext(MoviesContext);
    const {config, configLoading} = useMovieConfig();

    useEffect(() => {
        getMovies();
        getShows();
        //eslint-disable-next-line
    }, []);

    if(moviesLoading || configLoading){
        return <Spinner/>
    }

    const url = parseImageUrl(
        config?.images?.secure_base_url, 
        config?.images?.backdrop_sizes[3], 
        JSON.parse(localStorage.getItem('index-movie'))
    );

    const getPosterImageUrl = filePath => {
        const posterUrl = parseImageUrl(
            config?.images?.secure_base_url,
            config?.images?.poster_sizes[5],
            filePath
        );
        return posterUrl;
    }

    console.log(config);

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

            <article className="shows">
                <div className="shows-info">
                    <p className="shows-info-subheading">online streaming</p>
                    <h1 className="shows-info-heading">Rent shows online</h1>
                </div>

                <div className="shows-row">
                    {shows && shows.slice(1, 16).map(item => (
                        <ShowsCard 
                            key={item.id} 
                            item={item}
                            getImageUrl={getPosterImageUrl}
                        />
                    ))}
                </div>
            </article>

            <article>

            </article>
        </StyledWrapper>
    )
}

export default Home;
