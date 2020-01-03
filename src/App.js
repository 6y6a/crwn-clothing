import React from 'react';
import './App.css';
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import { Route } from 'react-router-dom'


function App() {
  return (
    <div >
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
