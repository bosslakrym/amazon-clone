import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Header() {
  return (
    <div className='header'>
        <Link to='/'>
        <img className='header_logo' 
        src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" 
        alt='Amazon Clone Logo'/>
        </Link>
            <div className='header_locationIcon'>
                <LocationOnIcon />
            </div>
            <div className='header_deliver'>
            <span className='header_optionLineOne'>
                    Deliver to</span>
                <span className='header_optionLineTwo'>
                    Nigeria</span>
        </div>
        <div className='header_search'>
            <input className='header_searchInput' type='text' placeholder='Search' />
            <SearchIcon className='header_searchIcon'/>
        </div>

        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Hello Guest!</span>
                <span className='header_optionLineTwo'>
                    Sign In</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Returns</span>
                <span className='header_optionLineTwo'>
                    & Orders</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Your</span>
                <span className='header_optionLineTwo'>
                    Prime</span>
            </div>

            <div className='header_optionBasket'>
            <Link to='/checkout'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>0</span>
            </Link>
            </div>
        
        </div>
    </div>
  )
}

export default Header