import React, { Component } from 'react';

import homepageimage1 from '../images/homepageimage1.jpg';
import homepageimage2 from '../images/homepageimage2.jpg';
import didyouknow1 from '../images/didyouknow1.jpeg';
import didyouknow2 from '../images/didyouknow2.jpg';
import didyouknow3 from '../images/didyouknow3.jpg';

import { List, ListItem, ListItemText } from '@material-ui/core';

class Home extends Component {
    handleItemClicked = (selectedIndex) => {
        var nextPath = '';

        switch (selectedIndex) {
            case 0:
                nextPath = '/';
                break;
            case 1:
                nextPath = '/about-our-site';
                break;
            case 2:
                nextPath = '/the-facts';
                break;
            case 3:
                nextPath = '/how-to-help';
                break;
            default:
                break;
        }

        this.props.history.push(nextPath);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="navbar-brand">Hope in Seattle</div>
                    <List className="navbar-nav ml-auto">
                        <ListItem button className="nav-item" onClick={() => this.handleItemClicked(0)}>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button className="nav-item" onClick={() => this.handleItemClicked(1)}>
                            <ListItemText primary="About Our Site" />
                        </ListItem>
                        <ListItem button className="nav-item" onClick={() => this.handleItemClicked(2)}>
                            <ListItemText primary="The Facts" />
                        </ListItem>
                        <ListItem button className="nav-item" onClick={() => this.handleItemClicked(3)}>
                            <ListItemText primary="How to Help" />
                        </ListItem>
                    </List>
                </nav>

                <main className="container-fluid">
                    <section className="row showcase-img">
                        <img className="container-fluid p-0 opacity60" src={homepageimage1} alt="Hands" />
                        <div className="centered expand-center">
                            <h1 className="heading1">Hope in Seattle</h1>
                            <p className="h2">Our goal is to connect you to opportunities where you can apply your skills to help the homeless community in Seattle</p>
                            <button className="btn btn-primary btn-warning btn-lg" onClick={() => this.handleItemClicked(3)}>
                                How to Help
                            </button>
                        </div>
                    </section>

                    <section>
                        <h2 className="heading2 pt-5">Did you know?</h2>
                        <div className="container expand-center">
                            <div className="row">
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <div className="thumbnail-img">
                                        <img className="img img-responsive full-width" src={didyouknow1} alt="Tent City" />
                                    </div>
                                    <p className="text-left">A total of 12,112 individuals were experiencing homelessness in King County on January 26, 2018.</p>
                                </div>

                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <div className="thumbnail-img">
                                        <img className="img img-responsive full-width" src={didyouknow2} alt="Tent City" />
                                    </div>
                                    <p className="text-left">In a 2018 count there were 8,600 homeless people in Seattle alone. </p>
                                </div>

                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <div className="thumbnail-img">
                                        <img className="img img-responsive full-width" src={didyouknow3} alt="Homeless Man" />
                                    </div>
                                    <p className="text-left">There was a 6,320 were living unsheltered (4,488 of them in Seattle),
                  which was a 15 percent increase over 2017 in King County and a 17 percent increase in Seattle.</p>
                                </div>
                            </div>

                            <button className="btn btn-primary btn-warning btn-lg m-5" onClick={() => this.handleItemClicked(2)}>
                                Learn More
                            </button>
                        </div>
                    </section>

                    <section className="row showcase-img">
                        <img className="container-fluid p-0 height opacity60" src={homepageimage2} alt="Holding Hands" />
                        <div className="centered">
                            <p className="quote">“<em>The purpose of life is not to be happy. It is to be useful, 
                            to be honorable, to be compassionate, to have it make some 
                            difference that you have lived and lived well.”</em></p>
                            <p className="quote">― Ralph Waldo Emerson</p>
                        </div>
                    </section>
                </main>

                <nav className="navbar navbar-expand-lg"></nav>
            </div>
        );
    }
}

export default Home;