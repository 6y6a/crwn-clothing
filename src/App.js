import React from 'react';
import './App.css';
import Homepage from "./pages/Homepage/Homepage";
import {Route} from 'react-router-dom'

const HatsPage = () => (
    <div>
        <h1>Hats page</h1>
    </div>
)

function App() {
  return (
    <div >
        <Route exact path='/' component={Homepage}/>
        <Route path='/hats' component={HatsPage}/>
    </div>
  );
}

export default App;
