import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsListView from './views/FriendsListView';

import './App.css';

function App() {
    return (
      <Router>
        <>
          <ul>
            <li><Link to='/login'>Log in</Link></li>
            <li><Link to='/friendsListView'>Friends List</Link></li>
          </ul>
          <div className="App">
            <h1>Something about friends</h1>
            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/friendsListView' component={FriendsListView} />

          </div>
        </>
      </Router>
  );
}


export default App;
