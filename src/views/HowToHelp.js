import React, { Component } from 'react';

import volunteer1 from '../images/volunteer1.jpg';

class HowToHelp extends Component {
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
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" onClick={() => this.handleItemClicked(0)}>Home</li>
                        <li className="nav-item" onClick={() => this.handleItemClicked(1)}>About Our Site</li>
                        <li className="nav-item" onClick={() => this.handleItemClicked(2)}>The Facts</li>
                        <li className="nav-item" onClick={() => this.handleItemClicked(3)}>How to Help</li>
                    </ul>
                </nav>

                <main className="container-fluid">
                    <section className="row showcase-img">
                        <img className="container-fluid p-0 height opacity60" src={volunteer1} alt="Volunteers" />
                        <div className="centered">
                            <h1 className="display-1">How To Help</h1>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                    </section>

                    <p>How to Help</p>
                </main>

                <nav className="navbar navbar-expand-lg"></nav>
            </div>
        );
    }
}

export default HowToHelp;