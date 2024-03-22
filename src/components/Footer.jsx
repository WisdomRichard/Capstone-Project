import React from 'react';
import logo from '../assets/Logo .svg'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className='footer section__margin'>
            <section className='footer-container'>
                <div className='footer-container-1'>
                    <img src={logo} alt=''/>
                    <p>Little Lemon was born out of love and respect for humble meal creations, met with a desire to
                        bring quality ingredients to the table. We are here to bring you a Food experience you can feel
                        good about.</p>
                </div>
                <div className='footer-container-2'>
                    <h3>Important Links</h3>
                    <ul className='list'>
                        <li><a className='nav-link' href='#app'>Home</a></li>
                        <li><a className='nav-link' href='#main'>About</a></li>
                        <li><a className='nav-link' href='#menu'>Menu</a></li>
                        <li><a className='nav-link' href='#main'>Reservations</a></li>
                        <li><a className='nav-link' href='#menu'>Order Online</a></li>
                        <li><a className='nav-link' href='#Login'>Login</a></li>
                    </ul>
                </div>
                <div className='footer-container-3'>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Towncity, USA</li>
                        <li>Phone: <br/> ++ 0123 456 789</li>
                        <li>Email: <br/> little@lemon.com</li>
                    </ul>
                </div>
                <div className='footer-container-4'>
                    <h3>Social Media Links</h3>
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