import React from 'react'
import { Link } from 'react-router-dom';
import './product.css'
import { useStateValue } from './StateProvider'

function Product({id,title ,image, price}) {
    const [{basket},dispatch] = useStateValue()

    const addToBasket = () => {

        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id:id,
                title:title,
                image:image,
                price:price 
            },
        }); 


    };

    return (
        <div className='product' >
            <Link to='/description' style={{ textDecoration: 'none' }}>

             <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>&#x20B9;</small>
                    <strong>{price}</strong>
                </p>
             </div>

             <img src={image} alt="" />

            </Link>
             <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
