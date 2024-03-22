import React from 'react'
import '../styles/confirmedBooking.css'
import {Link} from 'react-router-dom'

const ConfirmedBooking = () => {
    return (
        <div className='confirm'>
            <div className='confirm-header'>
                <h1>Your booking has been <span>Confirmed!</span></h1>
            </div>
            <div className='confirm-button'>
                <Link to='/'>Back to Home</Link>
            </div>
        </div>
    )
}

export default ConfirmedBooking
