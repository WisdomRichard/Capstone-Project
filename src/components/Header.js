import React from 'react'
import '../styles/Header.css'
import {Link} from "react-router-dom";
import bannerImage from '../assets/restauranfood.jpg'

function Header() {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Little Lemon was born out of love and respect for humble meal creations, met with a desire to bring quality ingredients to the table. We are here to bring you a Food experience you can feel good about.</p>
                    <Link to='/booking'><button aria-label='On Click'>Reserve Table</button></Link>
                </div>
                <div className='banner-image'>
                    <img src={bannerImage} alt=''/>
                </div>
            </section>
        </header>
    )
}

export default Header
