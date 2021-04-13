import React from 'react';
import PropTypes from 'prop-types';

import imdbLogo from '../../../assets/imdb-logo.svg';
import { StyledRating } from './rating.styles';

const Rating = ({rating, releaseDate}) => {
    return (
        <StyledRating rating={rating}>
            <div className="circle">
                {rating}
            </div>

            <figure className="logo">
                <img src={imdbLogo} alt="imdb"/>
            </figure>

            <span className="text">Score</span>

            <span className="text">{releaseDate}</span>
        </StyledRating>
    )
}

Rating.propTypes = {
    rating: PropTypes.number,
    releaseDate: PropTypes.string
}

export default Rating;
