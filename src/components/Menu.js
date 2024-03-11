import React from 'react'
import recipes from '../recipes'
import '../styles/Menu.css'
import Swal from "sweetalert2";
const Menu = () => {
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
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This weeks specials!</h2>
                <button className='orderBtn'>Order Menu</button>
            </div>
            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt=''/>
                        <div className='menu-content'>
                            <div className='heading'>
                                <h3>{recipe.title}</h3>
                                <p>${recipe.price}</p>
                            </div>
                            <div className='description'>
                                <p>{recipe.description}</p>
                            </div>
                            <div>
                                <button className='orderBtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Menu
