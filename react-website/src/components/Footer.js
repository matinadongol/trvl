import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals.
                </p>
                <p className="footer-subscription-text">
                    Subscribe Now.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyles='btn--outline'>Subscribe</Button>
                    </form>
                    
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'> How it Works</Link>
                        <Link to='/'> Testimonials</Link>
                        <Link to='/'> Careers</Link>
                        <Link to='/'> Investors</Link>
                        <Link to='/'> Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'> Kathmandu, Nepal</Link>
                        <Link to='/'> Phone: 24412323</Link>
                        <Link to='/'> Google Map</Link>
                        <Link to='/'> Address for Visa Form</Link>
                        <Link to='/'> GDS Codes</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Services</h2>
                        <Link to='/sign-up'> Paragliding</Link>
                        <Link to='/'> Trekking</Link>
                        <Link to='/'> Camping</Link>
                        <Link to='/'> Cruise</Link>
                        <Link to='/'> Europe Tour</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social</h2>
                        <Link to='/sign-up'> Facebook</Link>
                        <Link to='/'> Instagram</Link>
                        <Link to='/'> Youtube</Link>
                        <Link to='/'> LinkedIn</Link>
                        <Link to='/'> Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights"> TRVL @ 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                        aria-label='Youtube'
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label='Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to="/"
                        target="_blank"
                        aria-label='Linkedin'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
