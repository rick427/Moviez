import styled from 'styled-components';

export const StyledError = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .error-heading{
        font-size: ${({theme}) => theme.fontSizes.xxxxlarge};
        color: ${({theme}) => theme.colors.text.dark};
    }
    .error-text{
        font-size: ${({theme}) => theme.fontSizes.body};
    }
`;