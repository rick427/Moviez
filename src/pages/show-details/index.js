import React, {useEffect, useContext} from 'react'

import Rating from '../../components/common/Rating';
import Spinner from '../../components/common/Spinner';
import ShowsContext from '../../context/shows/shows.context';
import {CONFIG, parseImageUrl} from '../../utils/helpers';
import CastItem from '../../components/common/CastItem';
import { StyledShowDetails } from './show-details.styles';

const ShowDetails = ({match}) => {
    const {getShow, getCasts, casts, show, showsLoading} = useContext(ShowsContext);
    const showId = match.params.showId;

    useEffect(() => {
        getShow(showId);
        getCasts(showId);
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
                        <h2 className="jumbotron-card-info-heading">{show?.title}</h2>
                        <h5 className="jumbotron-card-info-subheading">plot</h5>
                        <p className="jumbotron-card-info-text">{show?.overview}</p>

                        <Rating 
                            rating={show?.vote_average} 
                            releaseDate={show?.first_air_date}
                        />

                        <div className="jumbotron-row">
                            {show?.genres?.map(item => (
                                <div key={item.id} className="genre">{item.name}</div>
                            ))}
                        </div>

                        <button className="jumbotron-btn">
                            + Add to list
                        </button>
                    </div>
                </article>
            </div>

            <div className="cast-info">
                <h2 className="cast-info-heading">
                    Actors
                </h2>

                <div className="cast-info-grid">
                    {casts?.map(item => (
                        <CastItem key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        </StyledShowDetails>
    )
}

export default ShowDetails
