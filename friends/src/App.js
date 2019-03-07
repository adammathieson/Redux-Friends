import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

import './App.css';

function App() {
    return (
      <Router>
        <>
          <ul>
            <li><Link to='/login'>Log in</Link></li>
            <li><Link to='/friendsList'>Friends List</Link></li>
          </ul>
          <div className="App">
            <h1>Something about friends</h1>
            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/friendsList' component={FriendsList} />

          </div>
        </>
      </Router>
  );
}


export default App;
