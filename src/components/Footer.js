import React from 'react';
import logo from '../assets/Logo .svg'
import {Link} from "react-router-dom";
import '../styles/Footer.css'
const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>Little Lemon was born out of love and respect for humble meal creations, met with a desire to bring quality ingredients to the table. We are here to bring you a Food experience you can feel good about.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul className='list'>
                        <li><Link className='link' to='/'>Home</Link></li>
                        <li><Link className='link' to='/about'>About</Link></li>
                        <li><Link className='link' to='/menu'>Menu</Link></li>
                        <li><Link className='link' to='/reservations'>Reservations</Link></li>
                        <li><Link className='link' to='/order-online'>Order Online</Link></li>
                        <li><Link className='link' to='/Login'>Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Towncity, USA</li>
                        <li>Phone: <br/> ++ 0123 456 789</li>
                        <li>Email: <br/> little@lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Meida Links</h3>
                    <ul>
                        <li><a className='link' href='www.facebook.com'>Facebook</a></li>
                        <li><a className='link' href='www.twitter.com'>Twitter</a></li>
                        <li><a className='link' href='www.instagram.com'>Instagram</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;