import React, { Component } from 'react';

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
        const {classes} = this.props;
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

                <main className="container-fluid">
                    <section className="row showcase-img">
                        <img className="container-fluid p-0 height opacity60" src={volunteer1} alt="Volunteers" />
                        <div className="centered expand-center">
                            <h1 className="heading1">How To Help</h1>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                    </section>

                    <section>
                        <p className="text-left m-5">Lorem ipsum dolor sit amet, altera essent delicatissimi has no. Meis ceteros quo at. Ea eam reque mnesarchum, sea ne elit dolore mollis, munere intellegebat eos at. An quod prima sit, quo laboramus maiestatis honestatis ad, eu soleat saperet appetere est. Usu vide atqui mandamus ut, civibus ancillae evertitur et duo. Mel quodsi adversarium ei, ne homero ubique mnesarchum eos, sea et exerci euripidis mnesarchum.</p>
                        <p className="text-left m-5">Lorem ipsum dolor sit amet, altera essent delicatissimi has no. Meis ceteros quo at. Ea eam reque mnesarchum, sea ne elit dolore mollis, munere intellegebat eos at. An quod prima sit, quo laboramus maiestatis honestatis ad, eu soleat saperet appetere est. Usu vide atqui mandamus ut, civibus ancillae evertitur et duo. Mel quodsi adversarium ei, ne homero ubique mnesarchum eos, sea et exerci euripidis mnesarchum.</p>
                        <p className="text-left m-5">Lorem ipsum dolor sit amet, altera essent delicatissimi has no. Meis ceteros quo at. Ea eam reque mnesarchum, sea ne elit dolore mollis, munere intellegebat eos at. An quod prima sit, quo laboramus maiestatis honestatis ad, eu soleat saperet appetere est. Usu vide atqui mandamus ut, civibus ancillae evertitur et duo. Mel quodsi adversarium ei, ne homero ubique mnesarchum eos, sea et exerci euripidis mnesarchum.</p>
                    </section>
                </main>

                <nav className="navbar navbar-expand-lg"></nav>
            </div>
        );
    }
}

export default withStyles(styles)(HowToHelp);