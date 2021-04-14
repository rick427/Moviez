import React from 'react';

import Button from '../../components/common/Button';
import { StyledError } from './error-styles'

const ErrorPage = ({history}) => {
    return (
        <StyledError>
            <h2 className="error-heading">404 !</h2>
            
            <p className="error-text">
                Page not found. Maybe it got stuck in traffic ?
            </p>

            <Button onClick={() => history.push('/')}>
                Go back home
            </Button>
        </StyledError>
    )
}

export default ErrorPage
