import styled from 'styled-components';

export const StyledShowDetails = styled.section`
  min-height: 100vh;

    .jumbotron{
        background: ${({url}) => `url(${url}) center center no-repeat fixed`};
        background-size: cover;
        height: 100vh;      
    }
`;