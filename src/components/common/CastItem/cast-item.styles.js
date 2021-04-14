import styled from 'styled-components';

export const StyledCastItem = styled.div`
  box-shadow: 0 0 10px rgba(0,0,0,.15);
  border-radius: 5px;
  overflow: hidden;
  padding: 1rem;
  text-align: center;
  //transition: all .5s;

  :hover{
    .cast-image > img{
      transform: scale(1.1);
      filter:  grayscale(0);
    }
  }

  .cast-image{
    width: 100%;
    height: 30rem;
    overflow: hidden;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(1);
      backface-visibility: hidden;
      transition: filter .3s, transform .6s;
    }
  }

  .cast-heading{
    font-size: ${({theme}) => theme.fontSizes.regular};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    color: ${({theme}) => theme.colors.text.dark};
    margin: 2rem 0 .5rem 0;
  }

  .cast-text{
    font-size: ${({theme}) => theme.fontSizes.small};
    font-weight: ${({theme}) => theme.fontWeights.medium};
    color: ${({theme}) => theme.colors.text.grey};
    margin-bottom: .5rem;
  }
`;