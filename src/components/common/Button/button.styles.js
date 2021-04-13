import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 2rem;
    border: none;
    width: 16rem;
    background: ${({theme}) => theme.colors.brand.primary};
    color: ${({theme}) => theme.colors.text.white};
    font-family: ${({theme}) => theme.fonts.body};
    font-size: ${({theme}) => theme.fontSizes.small};
    font-weight: ${({theme}) => theme.fontWeights.xbold};
    margin: 2rem 0;
    cursor: pointer;
    outline: none;
    transition: opacity .3s;

    :hover{
        opacity: .9;
    }
`;