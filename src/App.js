import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <PrivateRoute auth={localStorage.getItem('user')} path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
