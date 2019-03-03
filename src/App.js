import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={Home} />
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;