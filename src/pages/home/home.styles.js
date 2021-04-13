import styled from 'styled-components';

export const StyledWrapper = styled.section`
  background: ${({url}) => `linear-gradient(to right, rgba(0,0,0,.6), rgba(0,0,0,.1)), url(${url}) center center no-repeat`};
  background-size: cover;
  height: 100vh;
`;