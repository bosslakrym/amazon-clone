import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img 
            src="https://m.media-amazon.com/images/I/61+eWlUa0zL._SX1500_.jpg"
            alt=''
            className='home_image' />

            <div className='home_row'>
                <Product />
                <Product />
                
            </div>
            <div className='home_row'>
                <Product />
                <Product />
                <Product />
            </div>
            <div className='home_row'>
                <Product />
            </div>
        </div>
    </div>
  )
}

export default Home