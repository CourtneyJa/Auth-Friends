import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './Components/Nav';
import Links from './Components/PrivateRoute';


function App() {
  return (
    <Router>
      <Nav/>
      <div className="App">
        <Links/>
      </div>
    </Router>
  );
}

export default App;
