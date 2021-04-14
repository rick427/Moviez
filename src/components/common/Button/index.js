import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './button.styles';

const Button = ({children, ...otherProps}) => {
    return (
        <StyledButton {...otherProps}>
            {children}
        </StyledButton>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired
}

export default Button;
