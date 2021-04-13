import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background: ${({theme}) => theme.colors.bg.dark2};
    position: relative;
    z-index: 10;
    border: 1px solid transparent;

    .footer-top{
        padding: 4.5rem;
        text-align: center;
        margin: 2rem 0;

        .footer-top-heading{
            font-size: ${({theme}) => theme.fontSizes.xxxlarge};
            font-weight: ${({theme}) => theme.fontWeights.xxbold};
            color: ${({theme}) => theme.colors.text.white};
            margin: 1rem 0;
        }

        .footer-top-row{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem 0;

            input{
                width: 30rem;
                padding: 2rem;
                border: none;
                margin-right: 2rem;
                outline: none;
                font-family: ${({theme}) => theme.fonts.body};

                ::placeholder{
                    font-family: ${({theme}) => theme.fonts.body};
                }
            }
        }
    }

    .footer-text{
        font-size: ${({theme}) => theme.fontSizes.body};
        color: ${({theme}) => theme.colors.text.white};

        span{
            text-decoration: underline;
            font-weight: ${({theme}) => theme.fontWeights.xbold};
            margin-left: 1rem;
        }

        &.text-small{
            font-size: ${({theme}) => theme.fontSizes.small};
            margin-top: 2rem;
        }
    }

    .divider{
        width: 80%;
        margin: 0 auto 2rem auto;
        height: .2px;
        background: ${({theme}) => theme.colors.bg.light};
        opacity: .1;
    }

    .footer-grid{
        padding: 4.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2em;

        .footer-grid-item{
            .footer-grid-item-heading{
                text-transform: uppercase;
                font-size: ${({theme}) => theme.fontSizes.body};
                color: ${({theme}) => theme.colors.text.white};
                font-weight: ${({theme}) => theme.fontWeights.xbold};
                margin-bottom: 2rem;
                padding: 0 4rem;
            }

            .footer-grid-list{
                list-style: disc;
                padding: 0 5rem;

                .footer-grid-list-item{
                    font-size: ${({theme}) => theme.fontSizes.small};
                    color: ${({theme}) => theme.colors.text.white};
                    margin-top: .5rem;
                    cursor: pointer;
                    transition: all .2s;

                    :hover{
                        color: ${({theme}) => theme.colors.brand.primary}; 
                    }
                }
            }
        }
    }

    .footer-bottom{
        padding: 3rem;
        background: ${({theme}) => theme.colors.bg.dark};
        text-align: center;
        font-size: ${({theme}) => theme.fontSizes.small};
        color: ${({theme}) => theme.colors.text.white};
    }
`;