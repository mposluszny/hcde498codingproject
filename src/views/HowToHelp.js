import React, { Component } from 'react';

import positions from './positions.json';

import volunteer1 from '../images/volunteer1.jpg';

import { List, ListItem, ListItemText, Hidden, withStyles } from '@material-ui/core';


const style = {
    width: '155px',
};

const styles = theme => ({
    alignItems: {
        textAlign: 'center',
    },
});

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
        const { classes } = this.props;
        let models = positions;

        return (
            <div>
                <Hidden smDown>
                    <nav className="navbar navbar-expand-lg bottom-shadow">
                        <List className="navbar">
                            <ListItem button className="navbar-brand" onClick={() => this.handleItemClicked(0)}>
                                <ListItemText primary="Hope in Seattle" />
                            </ListItem>
                        </List>
                        <List className="navbar-nav ml-auto">
                            <ListItem style={style} button className="nav-item" onClick={() => this.handleItemClicked(0)}>
                                <ListItemText className={classes.alignItems} primary="Home" />
                            </ListItem>
                            <ListItem style={style} button className="nav-item" onClick={() => this.handleItemClicked(1)}>
                                <ListItemText className={classes.alignItems} primary="About Our Site" />
                            </ListItem>
                            <ListItem style={style} button className="nav-item" onClick={() => this.handleItemClicked(2)}>
                                <ListItemText className={classes.alignItems} primary="The Facts" />
                            </ListItem>
                            <ListItem style={style} button className="nav-item" onClick={() => this.handleItemClicked(3)}>
                                <ListItemText className={classes.alignItems} primary="How to Help" />
                            </ListItem>
                        </List>
                    </nav>
                </Hidden>

                <main className="container-fluid">
                    <section className="row showcase-img">
                        <img className="container-fluid p-0 height opacity60" src={volunteer1} alt="Volunteers" />
                        <div className="centered expand-center">
                            <h1 className="heading1">How To Help</h1>
                            <div class="form-row justify-content-center">
                                <div class="col-4">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-left mt-5 mx-5"> Positions </h2>
                        <p className="text-left mx-5">Select a volunteer position.</p>
                        <List>
                            {
                                models.map(model =>
                                    <ListItem>
                                        <Review model={model} />
                                    </ListItem>)
                            }
                        </List>
                    </section>
                </main>

                <nav className="navbar navbar-expand-lg"></nav>
            </div>
        );
    }
}

class Review extends Component {
    render() {
        let model = this.props.model;

        return (
            <div className="container" >
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-2">
                        <img src={model.pictureUrl} alt="organization logo" height="100" width="100" align="right" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-10">
                        <h4>{model.position} at {model.organization}</h4>
                        <p><strong>Description:</strong> {model.description}</p>
                        <p><strong>Type of Organization:</strong> {model.typeOfOrganization}</p>
                        <p><strong>Address:</strong> {model.address}</p>
                        <p><strong>Phone:</strong> {model.phone}</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default withStyles(styles)(HowToHelp);