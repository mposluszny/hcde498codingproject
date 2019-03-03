import React, { Component } from 'react';

import homepageimage1 from '../images/homepageimage1.jpg';
import homepageimage2 from '../images/homepageimage2.jpg';
import didyouknow1 from '../images/didyouknow1.jpeg';
import didyouknow2 from '../images/didyouknow2.jpg';
import didyouknow3 from '../images/didyouknow3.jpg';

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="navbar-brand">Hope in Seattle</div>
                    <ul className="navbar-nav">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">About Our Site</li>
                        <li className="nav-item">The Facts</li>
                        <li className="nav-item">How to Help</li>
                    </ul>
                </nav>

                <main className="container-fluid">
                    <section className="row square-image2">
                        <img className="opacity60 container-fluid p-0" src={homepageimage1} alt="holding hands 2" />
                        <div className="centered">
                            <h1 className="display-1 font-weight-bold">Hope in Seattle</h1>
                            <p className="h3 pt-3">Our goal is to connect you to opportunities where you can apply your skills to help the homeless community in Seattle</p>
                            <button className="btn btn-warning btn-lg m-5">
                                How to Help
                            </button>
                        </div>
                    </section >

                    <section>
                        <h2 className="display-3 font-weight-bold py-5">Did you know?</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="square-image">
                                        <img className="img img-responsive full-width" src={didyouknow1} alt="didyouknow1" />
                                    </div>
                                    <p className="text-left">A total of 12,112 individuals were experiencing homelessness in King County on January 26, 2018.</p>
                                </div>

                                <div className="col">
                                    <div className="square-image">
                                        <img className="img img-responsive full-width" src={didyouknow2} alt="didyouknow1" />
                                    </div>
                                    <p className="text-left">In a 2018 count there were 8,600 homeless people in Seattle alone. </p>
                                </div>

                                <div className="col">
                                    <div className="square-image">
                                        <img className="img img-responsive full-width" src={didyouknow3} alt="didyouknow1" />
                                    </div>
                                    <p className="text-left">There was a 6,320 were living unsheltered (4,488 of them in Seattle),
                  which was a 15 percent increase over 2017 in King County and a 17 percent increase in Seattle.</p>
                                </div>
                            </div>

                            <button className="btn btn-warning btn-lg m-5" onClick={this.handleClick}>
                                Learn More
                            </button>
                        </div>
                    </section>

                    <section className="row square-image2">
                        <img className="opacity60 container-fluid p-0 height" src={homepageimage2} alt="holding hands 2" />
                        <div className="centered">
                            <p className="h2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;