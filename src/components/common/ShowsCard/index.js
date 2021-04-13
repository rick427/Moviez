import React from 'react';

import icon from '../../../assets/real-sign.svg';
import { StyledShowsCard } from './shows-card.styles'

const ShowsCard = ({item, getImageUrl}) => {
    const url = getImageUrl(item.poster_path);
    return (
        <StyledShowsCard url={url}>
            <div className="card-content">
                <h2 className="card-title">{item.name}</h2>
                <button className="card-btn">
                    <img src={icon} alt="rent"/>
                </button>
            </div>
        </StyledShowsCard>
    )
}

export default ShowsCard;
