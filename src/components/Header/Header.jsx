import React from "react";
import {Link} from 'react-router-dom'
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

import './Header.scss'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>Shop</Link>
            <Link className="option" to='/contact'>Contact</Link>
            {currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Sign out</div>
                :
                <Link className="option" to='/signin'>Sign In</Link>
            }
            <CartIcon/>
        </div>
        <CartDropdown/>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
