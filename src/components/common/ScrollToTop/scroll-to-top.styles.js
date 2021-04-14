import styled from 'styled-components';

export const StyledButton = styled.button`
    position: fixed;
    top: 95%;
    right: 2%;
    transform: translate(-2%, -95%);
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.colors.bg.dark};
    color: #fff;
    font-size: ${({theme}) => theme.fontSizes.body};
    z-index: 1000 !important;
    outline: none;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover{
       background: ${({theme}) => theme.colors.brand.primary}; 
    }

    &.show-scroll-btn{
        opacity: 1;
        transition: all 0.8s;
        visibility: visible;
    }
`;