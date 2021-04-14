import styled from 'styled-components';

export const StyledRating = styled.div`
    display: flex;
    align-items: center;

    .circle{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: 2px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${({theme}) => theme.fontSizes.xsmall};
        color: ${({theme}) => theme.colors.text.white};
        margin-right: 2rem;
        position: relative;
        clip: rect(0px, 100px, 100px, 50px);

        :before{
            content: '';
            position: absolute;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            border: 2.4px solid ${({theme}) => theme.colors.bg.green};
        }
    }

    .logo{
        width: 4.5rem;
        height: 2.5rem;
        margin-right: 1rem;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .text{
        font-size: ${({theme}) => theme.fontSizes.regular};
        color: ${({theme}) => theme.colors.text.white};

        :not(:last-child){
            margin-right: 2rem;
        }
    }
`;