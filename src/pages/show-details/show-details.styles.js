import styled from 'styled-components';

export const StyledShowDetails = styled.section`
  min-height: 100vh;

    .jumbotron{
      background: ${({url}) => `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(${url}) center center no-repeat fixed`};
      background-size: cover;
      height: 100vh;
      position: relative;
      padding: 4.5rem;

      .jumbotron-card{
        position: fixed;
        width: 70vw;
        height: 55vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: flex-start;
        border-radius: 20px;
        background: rgba(0,0,0,.7);

        .jumbotron-card-image{
          width: 28rem;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;

          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .jumbotron-card-info{
          flex: 1;
          margin-left: 4rem;
          padding: 3rem;

          .jumbotron-card-info-heading{
            font-size: ${({theme}) => theme.fontSizes.xxlarge};
            color: ${({theme}) => theme.colors.text.white};
            margin-bottom: 2rem;
          }

          .jumbotron-card-info-subheading{
            text-transform: uppercase;
            font-size: ${({theme}) => theme.fontSizes.small};
            font-weight: ${({theme}) => theme.fontWeights.medium};
            color: ${({theme}) => theme.colors.text.white};
            margin-bottom: 1rem;
          }

          .jumbotron-card-info-text{
            font-size: ${({theme}) => theme.fontSizes.xsmall};
            font-weight: ${({theme}) => theme.fontWeights.regular};
            color: ${({theme}) => theme.colors.text.white};
            margin-bottom: 2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }

          .jumbotron-row{
            display: flex;
            align-items: center;
            margin-top: 2rem;

            .genre{
              font-size: ${({theme}) => theme.fontSizes.small};
              color: ${({theme}) => theme.colors.text.white};
              margin-left: .5rem;
              border: 1px solid rgba(255,255,255,.15);
              padding: 0 .5rem;
            }
          }
        }
      }
    }
`;