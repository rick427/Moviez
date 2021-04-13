import React from 'react';
import {useHistory} from 'react-router-dom';

import icon from '../../../assets/real-sign.svg';
import { StyledShowsCard } from './shows-card.styles'

const ShowsCard = ({item, getImageUrl}) => {
    const history = useHistory();

    const url = getImageUrl(item.poster_path);

    const handleClick = (item) => {
        const formattedName = item.name.replace(/\s/g, "_");
        history.push(`/movie/${formattedName}/${item.id}`);
    }

    return (
        <StyledShowsCard url={url} onClick={handleClick.bind(this, item)}>
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
