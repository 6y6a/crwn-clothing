import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css';

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

import {auth, createUserProfileDocument, addCollectionAndDocuments} from "./firebase/firebase.utils";
import {connect} from 'react-redux'
import {setCurrentUser} from "./store/User/UserActions";
import {selectCurrentUser} from "./store/User/UserSelector";
import {createStructuredSelector} from "reselect";
import {selectCollectionForPreview} from "./store/Shop/ShopSelectors";


class App extends React.Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props

        // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        //     if (userAuth) {
        //         const userRef = await createUserProfileDocument(userAuth)
        //
        //         userRef.onSnapshot(snapshot => {
        //             setCurrentUser({
        //                 id: snapshot.id,
        //                 ...snapshot.data()
        //             })
        //         })
        //     }
        //
        //     setCurrentUser(userAuth)
        // })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header/>

                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/checkout' component={CheckoutPage}/>
                    <Route path='/signin' render={() =>
                        this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)
                    }/>
                </Switch>

            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    collectionsArray: selectCollectionForPreview
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
