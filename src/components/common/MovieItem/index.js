import React from 'react';
import {useHistory} from 'react-router-dom';

import {CONFIG, parseImageUrl} from '../../../utils/helpers';
import { StyledMovieItem } from './movie-item.styles';

const MovieItem = ({item}) => {
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

    return (
        <StyledMovieItem>
            <figure className="movie-image" onClick={handleClick}>
                <img src={posterImageUrl} alt={item.title}/>
            </figure>

            <h2 className="movie-heading">
                {item.title}
            </h2>

            <div className="movie-row">
                <p className="movie-text">{item.release_date}</p>
                <p className="movie-text">Stock: x5</p>
            </div>

            <button className="movie-btn">
                + Add to list
            </button>
        </StyledMovieItem>
    )
}

export default MovieItem;
