import React from "react";
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../store/Cart/CartSelectors";
import {selectCurrentUser} from "../../store/User/UserSelector";
import {signOutStart} from "../../store/User/UserActions";

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./HeaderStyles";

const Header = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink className="option" to='/shop'>Shop</OptionLink>
            <OptionLink className="option" to='/contact'>Contact</OptionLink>
            {currentUser ?
                <OptionLink as='div' className='option' onClick={signOutStart}>Sign out</OptionLink>
                :
                <OptionLink className="option" to='/signin'>Sign In</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
