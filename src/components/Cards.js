import React from 'react'
import Swal from "sweetalert2";
import '../styles/cards.css'

const Cards = (props) => {
    const handleOrder = (id) => {
        console.log(id, 'id is clicked')
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Ordered!",
                    text: "Your meal has been ordered.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className='cards'>
            <div className='cards-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='cards-content'>
                <div className='cards-heading'>
                    <h3>{props.title}</h3>
                    <p>${props.price}</p>
                </div>
                <div className='cards-description'>
                    <p>{props.description}</p>
                </div>
                <div className='cards-button'>
                    <button onClick={() => handleOrder(props.id)}>Order Now</button>
                </div>
            </div>
        </div>
    )
}
export default Cards
