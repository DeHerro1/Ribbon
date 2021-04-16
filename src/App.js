import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Menus from './components/Menus/Menus';
import Activity from './components/Activity/Acitvity';
import Wallet from './components/Wallet/Wallet';
import Market from './components/Market/Market';
import Earn from './components/Earn/Earn';
import {Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/activity">
          <Activity />
        </Route>
        
        <Route path="/wallet">
          <Wallet />
        </Route>
        <Route path="/market">
          <Market />
        </Route>
        <Route path="/earn">
          <Earn />
        </Route>
        <Route exact pah="/">
          <Home />
        </Route>
      </Switch>
      <Menus />
    </div>
  );
}

export default App;
