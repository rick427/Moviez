import React, {useState, useEffect} from 'react';

import { StyledButton } from './scroll-to-top.styles';

const ScrollToTop = () => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => setHeight(window.pageYOffset);
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <StyledButton onClick={scrollToTop} className={height > 100 ? 'show-scroll-btn' : null}>
            &uarr;
        </StyledButton>
    )
}

export default ScrollToTop
