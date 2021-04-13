import React from 'react'
import { StyledContainer } from './spin.styles'

const Spinner = () => {
    return (
        <StyledContainer>
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </StyledContainer>
    )
}

export default Spinner
