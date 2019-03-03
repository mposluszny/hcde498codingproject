import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import AboutOurSite from './views/AboutOurSite';
import TheFacts from './views/TheFacts';
import HowToHelp from './views/HowToHelp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="fillParent">
            <Route exact path="/" component={Home} />
            <Route path="/about-our-site" component={AboutOurSite} />
            <Route path="/the-facts" component={TheFacts} />
            <Route path="/how-to-help" component={HowToHelp} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;