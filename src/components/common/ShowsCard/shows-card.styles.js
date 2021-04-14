import styled from 'styled-components';

export const StyledShowsCard = styled.div`
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.15);

    .card-image{
        width: 100%;
        height: 38rem;
        background: ${({url}) => `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(${url}) center center no-repeat`};
        background-size: cover;
        transition: all .3s;
        cursor: pointer;
        backface-visibility: hidden;

        :hover{
            opacity: .9;
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card-title{
        color: ${({theme}) => theme.colors.text.dark};
        font-size: ${({theme}) => theme.fontSizes.small};
        font-weight: ${({theme}) => theme.fontWeights.bold};
        margin: 2rem 0 1rem 0;
        padding: 0 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .card-row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;

        .card-text{
            color: ${({theme}) => theme.colors.text.grey};
            font-size: ${({theme}) => theme.fontSizes.xsmall};

            &.danger{
              color: ${({theme}) => theme.colors.brand.primary};  
              text-transform: capitalize;
              font-weight: ${({theme}) => theme.fontWeights.medium};
            }
        }
    }

    .card-btn{
        padding: .8rem 3rem;
        border: 1.5px solid ${({theme}) => theme.colors.brand.primary};
        margin: 1.5rem 0 2rem 2rem;
        background-color: ${({theme}) => theme.colors.bg.white};
        color: ${({theme}) => theme.colors.brand.primary};
        cursor: pointer;
        font-family: ${({theme}) => theme.fonts.body};
        outline: none;
        transition: all .3s;

        &.disable{
            pointer-events: none;
            :hover{
                background-color: ${({theme}) => theme.colors.bg.white};
                color: ${({theme}) => theme.colors.brand.primary};
            }
        }

        :hover{
            background-color: ${({theme}) => theme.colors.brand.primary};
            color: ${({theme}) => theme.colors.text.white};
        }
    }
`;