import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 2.5rem 4.5rem;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;

    .header-logo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        .logo{
            width: 4rem;
            height: auto;

            img{
                width: 100%;
                height: 100%;
            }
        }

        span{
            margin-left: 1rem;
            font-size: ${({theme}) => theme.fontSizes.mlarge};
            color: ${({theme}) => theme.colors.text.white};
            font-weight: ${({theme}) => theme.fontWeights.bold};
        }
    }

    .header-icons{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 10rem;

        .header-icon{
            width: 2.6rem;
            height: 2.6rem;
            cursor: pointer;
            position: relative;

            img{
                width: 100%;
                height: 100%;
            }

            .badge{
                position: absolute;
                top: -.8rem;
                left: 60%;
                width: 2.2rem;
                height: 2.2rem;
                border-radius: 50%;
                background: ${({theme}) => theme.colors.brand.primary};
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${({theme}) => theme.colors.text.white};
                font-weight: ${({theme}) => theme.fontWeights.bold};
            }
        }
    }
`;