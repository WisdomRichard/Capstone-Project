import React from 'react'
import recipes from '../components/recipes'
import '../styles/Menu.css'
import Cards from "./Cards";
import Swal from "sweetalert2";

const Menu = () => {

    const handleOrder = (e) => {
        console.log(e, 'id is clicked')
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
        <div className='menu-container section__margin' id='menu'>
            <div className='menu-header'>
                <h2 className='gradient-texts'>This week's specials!</h2>
                <div className='menu-button'>
                    <button onClick={() => handleOrder()}>Order Menu</button>
                </div>
            </div>
            <div className='cards-container'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <Cards image={recipe.image} title={recipe.title} price={recipe.price}
                               description={recipe.description} id={recipe.id}/>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Menu
