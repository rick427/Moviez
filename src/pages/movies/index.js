import React, {useContext, useEffect} from 'react';

import bannerImage from '../../assets/movie-banner.jpg';

import Header from '../../components/ui/Header';
import Button from '../../components/common/Button';
import Spinner from '../../components/common/Spinner';
import MovieItem from '../../components/common/MovieItem';
import MoviesContext from '../../context/movies/movies.context';
import { StyledMovies } from './movies.styles';

const Movies = () => {
    const {movies, getMovies, moviesLoading} = useContext(MoviesContext);

    useEffect(() => {
        getMovies();
        //eslint-disable-next-line
    }, []);

    if(moviesLoading){
        return <Spinner/>
    }

    return (
        <StyledMovies url={bannerImage}>
            <Header/>

           <div className="movies-banner">
                <h2 className="movies-banner-heading">Movies<span>.</span></h2>
                <p className="movies-banner-text">
                    All new released Hollywood can be rented from our amesome and 
                    robust catalog. Check it out.
                </p>
            </div>

            <div className="movies-grid">
                {movies?.map(item => (
                    <MovieItem key={item.id} item={item}/>
                ))}
            </div>

            <div className="btn-container">
                <Button>Load More</Button>
            </div>
        </StyledMovies>
    )
}

export default Movies;
