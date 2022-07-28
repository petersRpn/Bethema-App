import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

export default function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
  return (
    <div className='header'>
        <span className='header_logo'>logo</span>
        <div className="header_search">
            <input className='header_searchInput' type='text'/>
            <SearchIcon className='header_search_icon'/>
        </div>
        <div className="header_navbar">
            <Link to={!user && '/login'}>
            <div onClick={handleAuthenticaton} className='header_navbar_option'>
                <span className='header_navbar_option_line1'>Hello {!user ? 'Guest' : user.email}</span>
                <span className='header_navbar_option_line2'>{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            <div className='header_navbar_option'>
                <span className='header_navbar_option_line1'>Returns</span>
                <span className='header_navbar_option_line2'>& orders</span>
            </div>
            <div className='header_navbar_option'>
                <span className='header_navbar_option_line1'>Your</span>
                <span className='header_navbar_option_line2'>Prime</span>
            </div>
            <Link to='/checkout'>
            <div className='header__optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header_navbar_option_line2 header__basketCount'>{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}
