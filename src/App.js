import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import {Route} from 'react-router-dom'
import {auth} from "./firebase/firebase.utils";


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>

                <Route exact path='/' component={Homepage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInAndSignUp}/>
            </div>
        );
    }

}

export default App;
