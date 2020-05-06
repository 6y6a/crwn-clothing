import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css';

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

import {connect} from 'react-redux'
import {selectCurrentUser} from "./store/User/UserSelector";
import {createStructuredSelector} from "reselect";
import {selectCollectionForPreview} from "./store/Shop/ShopSelectors";
import {checkUserSession} from "./store/User/UserActions";


const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])

    return (
        <div>
            <Header/>

            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/checkout' component={CheckoutPage}/>
                <Route path='/signin' render={() =>
                    currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)
                }/>
            </Switch>

        </div>
    );

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    collectionsArray: selectCollectionForPreview
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
