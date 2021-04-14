import styled from 'styled-components';

export const StyledRentals = styled.section`
  min-height: 100vh;
    
  .movies-banner{
    width: 100%;
    height: 45vh;
    padding: 4.5rem;
    background: ${({url}) => `linear-gradient(to right, rgba(0,0,0,.6), rgba(0,0,0,.2)), url(${url}) center center no-repeat fixed`};
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .movies-banner-heading{
      font-size: ${({theme}) => theme.fontSizes.xxxlarge};
      color: ${({theme}) => theme.colors.text.white};

      span{
        color: ${({theme}) => theme.colors.brand.primary};
      }
    }

    .movies-banner-text{
      width: 40rem;
      font-size: ${({theme}) => theme.fontSizes.body};
      color: ${({theme}) => theme.colors.text.white};
    }
  }

  .movies-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2em;
    padding: 4.5rem;
    margin: 4rem 0;
  }

  .container{
    text-align: center;
    width: 100%;
    margin-top: 6rem;

    .container-heading{
      font-size: ${({theme}) => theme.fontSizes.xxlarge};
      color: ${({theme}) => theme.colors.text.grey};
    }

    .container-text{
      font-size: ${({theme}) => theme.fontSizes.body};
      color: ${({theme}) => theme.colors.text.grey};
    }
  }

  .btn-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
  }
`;