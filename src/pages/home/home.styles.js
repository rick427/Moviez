import styled from 'styled-components';

export const StyledWrapper = styled.section`
  background: ${({url}) => `white url(${url}) center center no-repeat`};
  background-size: cover;
  height: 100vh;
`;