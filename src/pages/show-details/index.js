import React, {useEffect, useContext} from 'react'

import Rating from '../../components/common/Rating';
import Spinner from '../../components/common/Spinner';
import ShowsContext from '../../context/shows/shows.context';
import { StyledShowDetails } from './show-details.styles';
import {CONFIG, parseImageUrl} from '../../utils/helpers';

const ShowDetails = ({match, history}) => {
    const {getShow, show, showsLoading} = useContext(ShowsContext);
    const showId = match.params.showId;

    useEffect(() => {
        getShow(showId)
        //eslint-disable-next-line
    }, [showId]);

    console.log(CONFIG);

    const url = parseImageUrl(
        CONFIG.images.secure_base_url,
        CONFIG.images.backdrop_sizes[3],
        show?.backdrop_path
    );

    const posterImageUrl = parseImageUrl(
        CONFIG.images.secure_base_url,
        CONFIG.images.poster_sizes[6],
        show?.poster_path
    );

    console.log(CONFIG);

    if(showsLoading){
        return <Spinner/>
    }

    return (
        <StyledShowDetails url={url}>
            <div className="jumbotron">
                <article className="jumbotron-card">
                    <figure className="jumbotron-card-image">
                        <img src={posterImageUrl} alt="poster"/>
                    </figure>

                    <div className="jumbotron-card-info">
                        <h2 className="jumbotron-card-info-heading">{show?.name}</h2>
                        <h5 className="jumbotron-card-info-subheading">plot</h5>
                        <p className="jumbotron-card-info-text">{show?.overview}</p>

                        <Rating 
                            rating={show?.vote_average} 
                            releaseDate={show?.first_air_date}
                        />

                        <div className="jumbotron-row">
                            {show?.genres?.map(item => (
                                <div className="genre">{item.name}</div>
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </StyledShowDetails>
    )
}

export default ShowDetails
