import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/Navbar'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>

          <Route exact path='/' component={Home} />

        </Switch>
      </div>
    </Router>
  )
}

export default App;
