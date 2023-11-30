import React from 'react';
//import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './Components/Nav';
import Links from './Components/PrivateRoute';


function App() {
  return (
    <>
      <Nav/>
      <div className="App">
        <Links/>
      </div>
    </>
  );
}

export default App;
