import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import AboutOurSite from './views/AboutOurSite';
import TheFacts from './views/TheFacts';
import HowToHelp from './views/HowToHelp';

import NavDrawer from './components/NavDrawer';
import NavigationToolbar from './components/NavigationToolbar';



import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false,
    }
  }

  toggleDrawer = () => {
    let { isDrawerOpen } = this.state;
    
    isDrawerOpen = !isDrawerOpen;

    this.setState({ isDrawerOpen });

   
  }
    
  
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="fillParent">
          <NavigationToolbar onMenuClicked={this.toggleDrawer} />
            <NavDrawer
              isOpened={this.state.isDrawerOpen}
              needsClose={this.toggleDrawer} />
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