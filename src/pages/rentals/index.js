import React, {useContext} from 'react';

import bannerImage from '../../assets/movie-banner.jpg';

import Header from '../../components/ui/Header';
import { StyledRentals } from './rentals-styles';
import Button from '../../components/common/Button';
import MovieItem from '../../components/common/MovieItem';
import RentalContext from '../../context/rentals/rental.context';

const Rentals = ({history}) => {
    const {rentals} = useContext(RentalContext);

    return (
        <StyledRentals url={bannerImage}>
            <Header/>

            <div className="movies-banner">
                <h2 className="movies-banner-heading">
                    My Rentals<span>.</span>
                </h2>
                <p className="movies-banner-text">
                    Finished watching a movie ? Please return them to rent more movies
                    as your account is capped on 3 movies per rent.
                </p>
            </div>

            {rentals.length === 0 ? (
                <div className="container">
                    <h2 className="container-heading">Your List is Empty!</h2>
                    <p className="container-text">
                        Please rent some movies, life na once, 
                        wahala no dey finish, no kee yourself.
                    </p>
                </div>
            ) : (
                <div className="movies-grid">
                    {rentals.map(item => (
                        <MovieItem key={item.id} isRented item={item}/>
                    ))}
                </div>
            )}

            {rentals.length === 0 && (
                <div className="btn-container">
                    <Button onClick={() => history.push('/movies')}>
                        Rent Movies
                    </Button>
                </div>
            )}
        </StyledRentals>
    )
}

export default Rentals;
