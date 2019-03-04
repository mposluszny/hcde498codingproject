import React, { Component } from 'react';

class AboutOurSite extends Component {
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
                    <p>About Our Site</p>
                </main>

                <nav className="navbar navbar-expand-lg"></nav>
            </div>
        );
    }
}

export default AboutOurSite;