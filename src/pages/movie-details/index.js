import React, {useEffect, useContext} from 'react';

import Rating from '../../components/common/Rating';
import Spinner from '../../components/common/Spinner';
import CastItem from '../../components/common/CastItem';

import { CONFIG, parseImageUrl } from '../../utils/helpers';
import { StyledMovieDetails } from './movie-details.styles';
import MoviesContext from '../../context/movies/movies.context';

const MovieDetails = ({match}) => {
    const {getMovie, getCasts, movie, casts, castsLoading,} = useContext(MoviesContext);
    const movieId = match.params.movieId;

    useEffect(() => {
        getMovie(movieId);
        getCasts(movieId);
        //eslint-disable-next-line
    }, [movieId]);

    const url = parseImageUrl(
        CONFIG.images.secure_base_url,
        CONFIG.images.backdrop_sizes[3],
        movie?.backdrop_path
    );

    const posterImageUrl = parseImageUrl(
        CONFIG.images.secure_base_url,
        CONFIG.images.poster_sizes[6],
        movie?.poster_path
    );

    if(castsLoading){
        return <Spinner/>
    }

    return (
        <StyledMovieDetails url={url}>
            <div className="jumbotron">
                <article className="jumbotron-card">
                    <figure className="jumbotron-card-image">
                        <img src={posterImageUrl} alt="poster"/>
                    </figure>

                    <div className="jumbotron-card-info">
                        <h2 className="jumbotron-card-info-heading">{movie?.title}</h2>
                        <h5 className="jumbotron-card-info-subheading">plot</h5>
                        <p className="jumbotron-card-info-text">{movie?.overview}</p>

                        <Rating 
                            rating={movie?.vote_average} 
                            releaseDate={movie?.first_air_date}
                        />

                        <div className="jumbotron-row">
                            {movie?.genres?.map(item => (
                                <div key={item.id} className="genre">{item.name}</div>
                            ))}
                        </div>

                        <button className="jumbotron-btn">
                            + Add to my rentals
                        </button>
                    </div>
                </article>
            </div>

            <div className="cast-info">
                <h2 className="cast-info-heading">
                    Actors
                </h2>

                <div className="cast-info-grid">
                    {casts?.map(item => (
                        <CastItem key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        </StyledMovieDetails>
    )
}

export default MovieDetails
