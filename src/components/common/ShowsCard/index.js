import React, {useContext} from 'react';
import toast from 'react-hot-toast';
import {useHistory} from 'react-router-dom';

import RentalContext from '../../../context/rentals/rental.context';
import { StyledShowsCard } from './shows-card.styles';

const ShowsCard = ({item, getImageUrl}) => {
    const {rentMovie, rentals} = useContext(RentalContext);
    const history = useHistory();

    const url = getImageUrl(item.poster_path);

    const handleClick = () => {
        const formattedName = item.name.replace(/\s/g, "_");
        history.push(`/show/${formattedName}/${item.id}`);
    }

    const handleRent = () => {
        if(rentals.length === 3){
            return toast.error('Sorry, you cannot rent more than 3 movies.')
        }
        rentMovie(item);
        toast.success(`${item.name} rented successfully.`)
    }

    return (
        <StyledShowsCard>
            <figure className="card-image" onClick={handleClick}>
                <img src={url} alt={item.name}/>
            </figure>
            <h2 className="card-title">{item.name}</h2>

            <div className="card-row">
                <p className="card-text">{item.first_air_date}</p>
                <p className="card-text">Stock: x{item.stock}</p>
            </div>

            <button className="card-btn" onClick={handleRent}>
                + Rent Show
            </button>
        </StyledShowsCard>
    )
}

export default ShowsCard;
