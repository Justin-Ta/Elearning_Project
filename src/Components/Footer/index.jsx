import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <hr className="my-0"/>
            <div className="footer__container container">
                <div className="footer__container__info">
                    <div className="footer__container__info__col">
                        <a href="#a">E-learning for Business</a>
                        <a href="#a">Teach on E-learning</a>
                        <a href="#a">Get the app</a>
                        <a href="#a">About us</a>
                        <a href="#a">Contact us</a>
                    </div>
                    <div className="footer__container__info__col">
                        <a href="#a">Careers</a>
                        <a href="#a">Blog</a>
                        <a href="#a">Help and Support</a>
                        <a href="#a">Affiliate</a>
                    </div>
                    <div className="footer__container__info__col">
                        <NavLink to='/term' target='_blank'>Terms</NavLink>
                        <a href="#a">Privacy policy and cookie policy</a>
                        <a href="#a">Sitemap</a>
                        <a href="#a">Featured courses</a>
                    </div>
                    <div className="footer__container__info__col footer__container__info__col--languages">
                        <select className="form-control footer__container__info__col__languages">
                            <option>English</option>
                        </select>
                    </div>
                </div>
                <div className="footer__container__copyright row">
                    <div className="footer__container__copyright__logo">
                    <img src="/img/icon/icon_Elearning.ico" alt="logo-coral" />
                    Learning
                    </div>
                    <span>© 2020 E-learning, Inc.</span>
                </div>
            </div>
        </footer>
    )
}
