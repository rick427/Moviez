import React from 'react';
import {useHistory} from 'react-router-dom';

import { StyledShowsCard } from './shows-card.styles';

const ShowsCard = ({item, getImageUrl}) => {
    const history = useHistory();

    const url = getImageUrl(item.poster_path);

    const handleClick = () => {
        const formattedName = item.name.replace(/\s/g, "_");
        history.push(`/show/${formattedName}/${item.id}`);
    }

    return (
        <StyledShowsCard>
            <figure className="card-image" onClick={handleClick}>
                <img src={url} alt={item.name}/>
            </figure>
            <h2 className="card-title">{item.name}</h2>

            <div className="card-row">
                <p className="card-text">{item.first_air_date}</p>
                <p className="card-text">Stock: x5</p>
            </div>

            <button className="card-btn">
                + Add to list
            </button>
        </StyledShowsCard>
    )
}

export default ShowsCard;
