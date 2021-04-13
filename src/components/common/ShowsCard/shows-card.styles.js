import styled from 'styled-components';

export const StyledShowsCard = styled.div`
    overflow: hidden;

    .card-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        width: 100%;
        height: 100%;
        background: ${({url}) => `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(${url}) center center no-repeat`};
        background-size: cover;
        transition: all 2s;
        cursor: pointer;
        backface-visibility: hidden;
    }

    :hover{  
        .card-content{
            background: ${({url}) => `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${url}) center center no-repeat`};
            background-size: cover;
        }      

        .card-title{
            opacity: 1;
        }

        .card-btn{
            opacity: 1;
            visibility: visible;
        }
    }

    .card-title{
        opacity: 0;
        /* width: 20rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; */
        font-size: ${({theme}) => theme.fontSizes.slarge};
        font-weight: ${({theme}) => theme.fontWeights.medium};
        color: ${({theme}) => theme.colors.text.white};
        transition: opacity .5s;
        text-align: center;
    }

    .card-btn{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        font-family: ${({theme}) => theme.fonts.body};
        border: none;
        background: ${({theme}) => theme.colors.brand.primary};
        color: ${({theme}) => theme.colors.text.white};
        margin-top: 2rem;
        opacity: 0;
        visibility: hidden;
        cursor: pointer;
        outline: none;

        img{
            width: 3rem;
            height: 3rem;
            object-fit: cover;
        }

        :hover{
            opacity: .8;
        }
    }
`;