import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Drawer, List, ListItem, ListItemText, withStyles } from '@material-ui/core';


const styles = theme => ({
  drawer: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
});

class NavDrawer extends Component {
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
    
    const { classes, isOpened, needsClose } = this.props;
    return (
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawer }}
        open={isOpened}
        onClose={needsClose}>
        <div className={classes.toolbar} />
        <List>
          <ListItem
            button
            onClick={() => this.handleItemClicked(0)}>
            
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem 
            button
            onClick={() => this.handleItemClicked(1)}>
       
            <ListItemText primary='About our Site' />
          </ListItem>
          <ListItem 
            button
            onClick={() => this.handleItemClicked(2)}>
            
            <ListItemText primary='The Facts' />
          </ListItem>
          <ListItem 
            button
            onClick={() => this.handleItemClicked(3)}>
           
            <ListItemText primary='How to Help' />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withRouter(withStyles(styles)(NavDrawer));
// withRouter is needed if you're routing using Javascript