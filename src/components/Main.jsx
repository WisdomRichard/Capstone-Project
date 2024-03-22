import React from 'react'
import {Route, Routes, useNavigate} from "react-router-dom";
import Header from "./Header";
import ConfirmedBooking from "./ConfirmedBooking";
import '../styles/main.css'
import BookingForm from "./BookingForm";

const Main = () => {

    const submitAPI = function(formData){
        return true;
    }

    const navigate = useNavigate();
    function submitForm(formData){
        if (submitAPI(formData)){
            navigate("/confirmed");

        }
    }

    return (
        <main className='main section__padding' id='main'>
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/bookingForm' element={<BookingForm submitForm={submitForm}/>}/>
                <Route path='/confirmed' element={<ConfirmedBooking/>}/>
            </Routes>
        </main>
    )
}

export default Main
