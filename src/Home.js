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
                <Product 
                id="B0BJTP7XY4"
                title="Dear Leader: Your Flagship Guide to Successful Leadership Paperback – October 19, 2022"
                price={20.99} 
                image='https://m.media-amazon.com/images/I/61AJdU3LFtL.jpg' 
                rating={5} />

                <Product 
                id="B092PJ9BZG"
                title="Billionaire Habits: The Secrets Billionaires use that the Poor don't use Paperback – April 16, 2021" 
                price={39.99} 
                image='https://m.media-amazon.com/images/I/71LkhJev11L.jpg' 
                rating={5} />
                
            </div>
            <div className='home_row'>
                <Product 
                id="B0BYRDSM9N"
                title="Billionaire Codes: The Codes that Billionaires Use to Create Wealth that Others Don't Paperback – February 4, 2022" price={29.99} 
                image='https://m.media-amazon.com/images/I/61Z5k8t+j1L.jpg' 
                rating={5} />
                <Product 
                id="B0BYRDSM9N43"
                title="BECOMING A BILLIONAIRE LAND BANKER: How I built my multi-billion Real Estate empire from Zero up Paperback – March 16, 2023" 
                price={45.59} 
                image='https://m.media-amazon.com/images/I/61AJdU3LFtL.jpg' 
                rating={5} />
                <Product 
                id="B0BYRDSM9N23"
                title="BILLIONAIRE HABITS FOR ENTREPRENEURS" 
                price={29.99} 
                image='https://m.media-amazon.com/images/I/61AJdU3LFtL.jpg' 
                rating={5} />
            </div>
            <div className='home_row'>
                <Product 
                id="B2330BYRDSM9N"
                title="Traction: Get a Grip on Your Business" 
                price={17.94} 
                image='https://m.media-amazon.com/images/I/41ov95VGvYL._BG0,0,0,0_FMpng.jpg' 
                rating={5} />
            </div>
        </div>
    </div>
  )
}

export default Home