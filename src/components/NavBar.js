import React, {useState} from 'react'
import logo from '../assets/Logo .svg'
import {NavLink} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/NavBar.css'
function NavBar() {

    const [showNavBar, setShowNavBar] = useState(false)

    const toggleNavItems = () => {
      setShowNavBar(!showNavBar);
    }

    return (
        <nav className='nav-bar'>
            <div className='nav-container'>
                <div className='nav-logo'>
                    <img src={logo} alt=''/>
                </div>
                <div className={`nav-menu ${showNavBar && 'active'}`}>
                    <ul className='nav-list'>
                        <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
                        <li><NavLink className='nav-link' to='/about'>About</NavLink></li>
                        <li><NavLink className='nav-link' to='/menu'>Menu</NavLink></li>
                        <li><NavLink className='nav-link' to='/reservations'>Reservations</NavLink></li>
                        <li><NavLink className='nav-link' to='/order-online'>Order Online</NavLink></li>
                        <li><NavLink className='nav-link' to='/Login'>Login</NavLink></li>
                    </ul>
                </div>
                <button className='nav-icon' onClick={toggleNavItems}>
                    <ReorderIcon/>
                </button>
            </div>
        </nav>
    )
}

export default NavBar
