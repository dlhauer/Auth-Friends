import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  localStorage.setItem('token', '')
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friends'>Friends list</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path='/friends' component={FriendsList}/>
          <Route path='/login' component={Login} />
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
