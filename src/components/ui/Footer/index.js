import React from 'react'

import Button from '../../common/Button';
import { StyledFooter } from './footer.styles';

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer-top">
                <h2 className="footer-top-heading">Rent free for your first 30 days!</h2>
                <p className="footer-text">Ready to rent? Enter your email to create or restart your membership</p>

                <div className="footer-top-row">
                    <input type="text" placeholder="Type your e-mail address"/>
                    <Button>Get started</Button>
                </div>
            </div>

            <div className="divider"/>

            <div className="footer-grid">
                <article className="footer-grid-item">
                    <p className="footer-text">
                        Questions? <span>Call 0809-9087-543</span>
                    </p>
                    <p className="footer-text text-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco.
                    </p>
                </article>
                <article className="footer-grid-item">
                    <h2 className="footer-grid-item-heading">moviez</h2>
                    <ul className="footer-grid-list">
                        <li className="footer-grid-list-item">Movies</li>
                        <li className="footer-grid-list-item">Shows</li>
                        <li className="footer-grid-list-item">Blog</li>
                        <li className="footer-grid-list-item">Contact</li>
                    </ul>
                </article>

                <article className="footer-grid-item">
                    <h2 className="footer-grid-item-heading">support</h2>
                    <ul className="footer-grid-list">
                        <li className="footer-grid-list-item">FAQS</li>
                        <li className="footer-grid-list-item">Help center</li>
                        <li className="footer-grid-list-item">Support</li>
                        <li className="footer-grid-list-item">Account</li>
                    </ul>
                </article>

                <article className="footer-grid-item">
                    <h2 className="footer-grid-item-heading">Policies</h2>
                    <ul className="footer-grid-list">
                        <li className="footer-grid-list-item">Privacy policy</li>
                        <li className="footer-grid-list-item">Terms of use</li>
                        <li className="footer-grid-list-item">Legal notice</li>
                        <li className="footer-grid-list-item">Terms & Conditions</li>
                    </ul>
                </article>
            </div>

            <div className="footer-bottom">
                &copy; 2020 Moviezz | Ricks Inc.
            </div>
        </StyledFooter>
    )
}

export default Footer
