import React from 'react'
import { CONFIG, parseImageUrl } from '../../../utils/helpers'
import { StyledCastItem } from './cast-item.styles'

const CastItem = ({item}) => {
    const imageUrl = parseImageUrl(
        CONFIG.images.secure_base_url,
        CONFIG.images.poster_sizes[3],
        item.profile_path
    );

    return (
        <StyledCastItem>
            <figure className="cast-image">
                <img src={imageUrl} alt={item.name}/>
            </figure>
            <h2 className="cast-heading">{item.name}</h2>
            <p className="cast-text">{item.character}</p>
        </StyledCastItem>
    )
}

export default CastItem;
