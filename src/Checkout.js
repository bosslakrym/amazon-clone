import React from 'react'
import './Checkout.css';
import SubTotal from './SubTotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad'
            src='https://placehold.co/1900x300'
            alt=''
            />

            <div>
                <h2 className='checkout_title'>
                Your Checkout Basket
                </h2>

                {/* Basket Name */}
                {/* Basket Name */}
                {/* Basket Name */}
                {/* Basket Name */}
                {/* Basket Name */}
                {/* Basket Name */}
            </div>
        </div>

        <div className='checkout_right'>
             <SubTotal />
        </div>
    </div>
  )
}

export default Checkout