import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import Home from './components/home.component';
import CreateUser from './components/create-user.component';
import Login from './components/login.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component = {Home} />
      <Route path="/users/add"  component = {CreateUser} />
      <Route path="/login"  component = {Login} />
    </Router>
  );
}

export default App;
