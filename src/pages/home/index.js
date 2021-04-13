import React, {useEffect, useContext} from 'react';

import advertImage from '../../assets/advert.png';
import { parseImageUrl } from '../../utils/helpers';
import useMovieConfig from '../../hooks/useMovieConfig';
import { adverts } from '../../constants/adverts.constants';

import { StyledWrapper } from './home.styles';
import Rating from '../../components/common/Rating';
import Button from '../../components/common/Button';
import Spinner from '../../components/common/Spinner';
import ShowsCard from '../../components/common/ShowsCard';

import ShowsContext from '../../context/shows/shows.context';
import MoviesContext from '../../context/movies/movies.context';

const Home = () => {
    const {shows, getShows} = useContext(ShowsContext);
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
                        Browse all movies
                    </Button>
                </div>
            </article>

            <article className="shows">
                <div className="shows-info">
                    <p className="shows-info-subheading">online streaming</p>
                    <h1 className="shows-info-heading">Rent shows online</h1>
                </div>

                <div className="shows-row">
                    {shows && shows.map(item => (
                        <ShowsCard 
                            key={item.id} 
                            item={item}
                            getImageUrl={getPosterImageUrl}
                        />
                    ))}
                </div>
            </article>

            <article className="advert">
                <figure className="advert-image">
                    <img src={advertImage} alt="advert"/>
                </figure>

                <div className="advert-info">
                    <h2 className="advert-info-heading">
                        Best pick for hassle-free <span>renting</span> experience.
                    </h2>

                    {adverts.map(item => (
                        <div key={item.id} className="advert-info-tile">
                            <figure className="advert-info-icon">
                                <img src={item.icon} alt={item.name}/>
                            </figure>

                            <div>
                                <h4 className="advert-info-tile-heading">{item.name}</h4>
                                <p className="advert-info-tile-text">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </StyledWrapper>
    )
}

export default Home;
