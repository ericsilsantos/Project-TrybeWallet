import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </>
  );
}

export default App;
