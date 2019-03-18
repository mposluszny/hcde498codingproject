import React, { Component } from 'react';

import homeless1 from '../images/homeless1.jpg';
import statistics1 from '../images/statistics1.jpg';

import { List, ListItem, ListItemText, Hidden, withStyles } from '@material-ui/core';


const style = {
    width: '155px',
};

const styles = theme => ({
    alignItems: {
        textAlign: 'center',
    },
});

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
        const { classes } = this.props;

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
                        <img className="container-fluid p-0 height opacity60" src={homeless1} alt="Homeless" />
                        <div className="centered">
                            <h1 className="heading1">The Facts</h1>
                        </div>
                    </section>

                    <section>
                        <h2 className="heading2 py-5">Statistics</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="thumbnail-img">
                                        <img className="img img-responsive width" src={statistics1} alt="Bar Graph" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <p className="text-left m-5">On any given night, there are over 600,000 homeless people in the U.S., according to the U.S. Department of Housing and Urban Development (HUD). In 2017, Seattle had the third-largest homeless population and continues to see a rise in homeless people on the streets.</p>
                                    <p className="text-left m-5">Jenny Durkan, the mayor of Seattle, states that, "Seattle's homelessness crisis has been years in the making, and its roots run deep, touching racial inequity, economic disparities, mental health treatment, rising housing costs, mental health, addiction, and so much more. We have a responsibility to be honest that this crisis won't go away overnight. Lasting, meaningful progress will take years. But we still must act - and are acting - to improve life in Seattle."</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <nav className="navbar navbar-expand-lg"></nav>
            </div >
        );
    }
}

export default withStyles(styles)(TheFacts);