import styled from 'styled-components';

export const StyledWrapper = styled.section`
  min-height: 100vh;

  .banner{
    background: ${({url}) => `linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.1)), url(${url}) center center no-repeat fixed`};
    background-size: cover;
    height: 100vh;
    position: relative;

    .banner-info{
      width: 60rem;
      position: fixed;
      top: 70%;
      left: 5%;
      transform: translate(-5%, -70%);
      padding: 2rem 0;

      .banner-info-subheading{
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.7);
        font-size: ${({theme}) => theme.fontSizes.regular};
        font-weight: ${({theme}) => theme.fontWeights.xxbold};
        position: relative;
        padding-left: 2rem;

        :before{
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          width: .5rem;
          height: 1.6rem;
          background: ${({theme}) => theme.colors.brand.primary};
        }
      }

      .banner-info-heading{
        color: ${({theme}) => theme.colors.text.white};
        font-size: ${({theme}) => theme.fontSizes.xxxxlarge};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 6.5rem;
      }

      .banner-info-row{
        margin: 2rem 0;
      }

      .banner-info-text{
        font-size: ${({theme}) => theme.fontSizes.regular};
        color: ${({theme}) => theme.colors.text.white};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
  }

  .shows{
    position: relative;
    z-index: 10;
    background-color: ${({theme}) => theme.colors.bg.white};
    padding: 5rem;

    .shows-info{
      margin: 4rem 0;

      .shows-info-subheading{
        text-transform: uppercase;
        color: ${({theme}) => theme.colors.text.grey2};
        opacity: .6;
        font-size: ${({theme}) => theme.fontSizes.small};
        font-weight: ${({theme}) => theme.fontWeights.xxxbold};
      }

      .shows-info-heading{
        color: ${({theme}) => theme.colors.text.dark};
        font-size: ${({theme}) => theme.fontSizes.xxxlarge};
        text-transform: capitalize;
      }
    }

    .shows-row{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2em;
    }
  }

  .advert{
    position: relative;
    z-index: 10;
    background-color: ${({theme}) => theme.colors.bg.white};
    padding: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .advert-image{
      width: 50rem;
      height: 60rem;

      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .advert-info{
      .advert-info-heading{
        width: 45rem;
        margin-bottom: 2rem;
        color: ${({theme}) => theme.colors.text.dark};
        font-size: ${({theme}) => theme.fontSizes.xxslarge};
        font-weight: ${({theme}) => theme.fontWeights.xxbold};

        span{
          text-decoration: underline;
        }
      }

      .advert-info-tile{
        display: flex;
        align-items: center;

        .advert-info-icon{
          width: 5rem;
          height: 5rem;
          margin: 2rem 2rem 4rem 0;

          img{
            width: 100%;
            height: 100%;
          }
        }

        .advert-info-tile-heading{
          color: ${({theme}) => theme.colors.text.dark};
          font-size: ${({theme}) => theme.fontSizes.body};
          font-weight: ${({theme}) => theme.fontWeights.xbold}; 
        }

        .advert-info-tile-text{
          width: 55rem;
          color: ${({theme}) => theme.colors.text.dark};
          font-size: ${({theme}) => theme.fontSizes.small};
        }
      }
    }
  }
`;