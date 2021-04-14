import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import { StyledHeader } from './header.styles';
import searchIcon from '../../../assets/search.svg';
import bookmarkIcon from '../../../assets/bookmark.svg';
import RentalContext from '../../../context/rentals/rental.context';

const Header = () => {
    const history = useHistory();
    const {rentals} = useContext(RentalContext);
    
    return (
        <StyledHeader>
            <div className="header-logo" onClick={() => history.push('/')}>
                <figure className="logo">
                    <img src={logo} alt="moviez-logo"/>
                </figure>

                <span>Moviez</span>
            </div>

            <div className="header-icons">
                <figure className="header-icon">
                    <img src={searchIcon} alt="search-icon"/>
                </figure>

                <figure className="header-icon">
                    <img src={bookmarkIcon} alt="bookmark-icon" onClick={() => history.push('/rentals')}/>

                    {rentals.length > 0 && (
                        <span className="badge">{rentals.length}</span>
                    )}
                </figure>
            </div>
        </StyledHeader>
    )
}

export default Header
