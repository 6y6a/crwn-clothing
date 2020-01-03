import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import { Route } from 'react-router-dom'


function App() {
  return (
    <div >
        <Header/>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUp}/>
    </div>
  );
}

export default App;
