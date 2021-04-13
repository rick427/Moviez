import React, {useEffect, useContext} from 'react'
import MoviesContext from '../../context/movies/movies.context';
import { StyledMovieDetails } from './movie-details.styles'

const MovieDetails = ({match, history}) => {
    const {getMovie, movie, movieLoading,} = useContext(MoviesContext);
    const movieId = match.params.movieId;

    useEffect(() => {
        getMovie(movieId)
        //eslint-disable-next-line
    }, [movieId]);

    return (
        <StyledMovieDetails>
            <div className="jumbotron">
                
            </div>
        </StyledMovieDetails>
    )
}

export default MovieDetails
