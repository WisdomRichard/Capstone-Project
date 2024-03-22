import React, {useState} from 'react'
import logo from '../assets/Logo .svg'
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
                        <li><a className='nav-link' href='#app'>Home</a></li>
                        <li><a className='nav-link' href='#main'>About</a></li>
                        <li><a className='nav-link' href='#menu'>Menu</a></li>
                        <li><a className='nav-link' href='#main'>Reservations</a></li>
                        <li><a className='nav-link' href='#menu'>Order Online</a></li>
                        <li><a className='nav-link' href='#Login'>Login</a></li>
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
