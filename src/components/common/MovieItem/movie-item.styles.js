import styled from 'styled-components';

export const StyledMovieItem = styled.div`
    box-shadow: 0 0 10px rgba(0,0,0,.15);
    border-radius: 5px;
    overflow: hidden;

    .movie-image{
        width: 100%;
        height: 35rem;
        overflow: hidden;
        cursor: pointer;

        :hover{
            opacity: .9;
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .movie-heading{
        color: ${({theme}) => theme.colors.text.dark};
        font-size: ${({theme}) => theme.fontSizes.small};
        font-weight: ${({theme}) => theme.fontWeights.bold};
        margin: 2rem 0 1rem 0;
        padding: 0 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .movie-row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;

        .movie-text{
            color: ${({theme}) => theme.colors.text.grey};
            font-size: ${({theme}) => theme.fontSizes.xsmall};
        }
    }

    .movie-btn{
        padding: .8rem 3rem;
        border: 1.5px solid ${({theme}) => theme.colors.brand.primary};
        margin: 1.5rem 0 2rem 2rem;
        background-color: ${({theme}) => theme.colors.bg.white};
        color: ${({theme}) => theme.colors.brand.primary};
        cursor: pointer;
        font-family: ${({theme}) => theme.fonts.body};
        outline: none;
        transition: all .3s;

        :hover{
            background-color: ${({theme}) => theme.colors.brand.primary};
            color: ${({theme}) => theme.colors.text.white};
        }
    }
`;