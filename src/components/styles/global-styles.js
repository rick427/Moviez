import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        font-family: ${({theme}) => theme.fonts.body};
        font-weight: 400;
        line-height: 1.6;
        color: #444;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`; 