import React, { Component } from 'react';

import seattle1 from '../images/seattle1.png';

import { List, ListItem, ListItemText, Hidden, withStyles } from '@material-ui/core';


const style = {
    
    width: '155px',
    
  };

const styles = theme => ({
    alignItems: {
        textAlign: 'center',
    
    },
  
  });

  

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
        const { classes} = this.props;
        return (
            <div>
                <Hidden smDown>
                <nav className="navbar navbar-expand-lg bottom-shadow">
                    <div className="navbar-brand bold">Hope in Seattle</div>
                    <List className="navbar-nav ml-auto">
                        <ListItem  style={style} button className="nav-item" onClick={() => this.handleItemClicked(0)}>
                            <ListItemText className={classes.alignItems} primary="Home" />
                        </ListItem>
                        <ListItem  style={style} button className="nav-item" onClick={() => this.handleItemClicked(1)}>
                            <ListItemText className={classes.alignItems} primary="About Our Site" />
                        </ListItem>
                        <ListItem style={style} button className="nav-item" onClick={() => this.handleItemClicked(2)}>
                            <ListItemText className={classes.alignItems} primary="The Facts" />
                        </ListItem>
                        <ListItem style={style} button className="nav-item" onClick={() => this.handleItemClicked(3)}>
                            <ListItemText  className={classes.alignItems} primary="How to Help" />
                        </ListItem>
                    </List>
                </nav>
                </Hidden>

                <main className="container-fluid ">
                    <section className="row showcase-img">
                        <img className="container-fluid p-0 height opacity60" src={seattle1} alt="Seattle" />
                        <div className="centered expand-center">
                            <h1 className="heading1">About Our Site</h1>
                        </div>
                    </section>

                    <section>
                        <p className="text-left m-5">Hope in Seattle was created by two University of Washington students for a user-centered front-end web development course. The purpose of our website is to provide information on homelessness in Seattle and how to help.</p>
                    </section>
                </main>

                <nav className="navbar navbar-expand-lg"></nav>
            </div>
        );
    }
}

export default withStyles(styles)(AboutOurSite);