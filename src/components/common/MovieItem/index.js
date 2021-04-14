import React, {useContext} from 'react';
import toast from 'react-hot-toast';
import {useHistory} from 'react-router-dom';

import { StyledMovieItem } from './movie-item.styles';
import {CONFIG, parseImageUrl} from '../../../utils/helpers';
import RentalContext from '../../../context/rentals/rental.context';

const MovieItem = ({item, isRented}) => {
    const {returnMovie, rentMovie, rentals} = useContext(RentalContext);
    const history = useHistory();

    const posterImageUrl = parseImageUrl(
        CONFIG.images.secure_base_url,
        CONFIG.images.poster_sizes[3],
        item.poster_path
    );

    const handleClick = () => {
        const formattedName = item.title.replace(/\s/g, "_");
        history.push(`/movie/${formattedName}/${item.id}`);
    }

    const handleRent = () => {
        if(rentals.length === 3){
            return toast.error('Sorry, you cannot rent more than 3 movies.')
        }
        rentMovie(item);
        toast.success(`${item.title} rented successfully`)
    }

    return (
        <StyledMovieItem>
            <figure className="movie-image" onClick={handleClick}>
                <img src={posterImageUrl} alt={item.title}/>
            </figure>

            <h2 className="movie-heading">
                {item.title || item.name}
            </h2>

            <div className="movie-row">
                <p className="movie-text">{item.release_date || item.first_air_date}</p>
                <p className="movie-text">Stock: x5</p>
            </div>

            {isRented ? (
                <button className="movie-btn" onClick={() => returnMovie(item)}>
                    &larr; Return Movie
                </button>
            ) : (
                <button className="movie-btn" onClick={handleRent}>
                    + Rent Movie
                </button>
            )}
        </StyledMovieItem>
    )
}

export default MovieItem;
