import React from "react";
import {Link} from 'react-router-dom'
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../store/Cart/CartSelectors";
import {selectCurrentUser} from "../../store/User/UserSelector";

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from "./HeaderStyles";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink className="option" to='/shop'>Shop</OptionLink>
            <OptionLink className="option" to='/contact'>Contact</OptionLink>
            {currentUser ?
                <OptionDiv className='option' onClick={() => auth.signOut()}>Sign out</OptionDiv>
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

export default connect(mapStateToProps)(Header)
