import React, { Component } from 'react';

class TheFacts extends Component {
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
                        <div className="centered">
                            <h1 className="display-1">The Facts</h1>
                        </div>
                    </section>

                    <section>
                        <h2 className="display-2 py-5">Statistics</h2>
                        <p>On any given night, there are over 600,000 homeless people in the U.S., according to the US Department of Housing and Urban Development (HUD).</p>
                    </section>
                </main>

                <nav className="navbar navbar-expand-lg"></nav>
            </div>
        );
    }
}

export default TheFacts;