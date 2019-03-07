import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import './App.css';

function App() {
    return (
      <Router>
        <div className="App">
          <h1>Something about friends</h1>
          <Route path='/login' component={login} />

        </div>
      </Router>
  );
}


export default App;
