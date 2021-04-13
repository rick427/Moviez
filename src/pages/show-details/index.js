import React, {useEffect, useContext} from 'react'

import ShowsContext from '../../context/shows/shows.context';
import { StyledShowDetails } from './show-details.styles'

const ShowDetails = ({match, history}) => {
    const {getShow, show, showLoading,} = useContext(ShowsContext);
    const showId = match.params.showId;

    useEffect(() => {
        getShow(showId)
        //eslint-disable-next-line
    }, [showId]);

    return (
        <StyledShowDetails>
            <div className="jumbotron">
                show id
            </div>
        </StyledShowDetails>
    )
}

export default ShowDetails
