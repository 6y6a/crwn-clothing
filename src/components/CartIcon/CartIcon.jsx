import React from "react";
import {ReactComponent as ShopingIcon} from "../../assets/shoping-bag.svg";
import {connect} from 'react-redux'
import {toggleCartHidden} from "../../store/Cart/CartActions";
import {selectCartItemsCount} from "../../store/Cart/CartSelectors";
import './CartIcon.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShopingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
