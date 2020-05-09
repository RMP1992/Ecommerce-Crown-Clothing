import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';


import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) =>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact Me
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()} >Sign Out</div>
                : 
                <Link className='option' to='/signin'>Sign in</Link>
            }
            {/* if currentUser is equal to null (default state meaning no user is signed in) then we will render the Sign in link */}
            {/* however if the state of currentUser (in App.js) is an object, it evaluates to true and therefore we display sign out */}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown/>}
    </div>
)
const mapStateToProps = createStructuredSelector({
//the state prop is the root reducer
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);