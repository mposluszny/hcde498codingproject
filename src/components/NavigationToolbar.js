import React, { Component } from 'react';
import { AppBar, IconButton, Toolbar, Typography, withStyles, Hidden, withWidth } from '@material-ui/core';
import { Menu } from '@material-ui/icons';


const styles = theme => ({
  appBar: {
    textAlign: 'left',
    zIndex: 1400,
    color: 'black',
    background: '#FFC646',
  },
  menuButton: {
    marginLeft: 'auto',
  },
 
  toolbar: {
    justifyContent: 'space-between'
    
  },
  title: {
    textAlign: 'left',
  },

});

class NavigationToolbar extends Component {
  render() {
    const { classes, onMenuClicked } = this.props;
    return (
    <Hidden mdUp>  
      <AppBar
        className={classes.appBar}
        position="fixed"
        color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography 
              variant="h6" 
              color="inherit"
              className={classes.title}>
              Hope in Seattle
            </Typography>
          {
            // This button passes its onClick prop to the onMenuClicked prop.
            // If you look back at App.js, this essentially tells App to open
            // the drawer.
          }
          <IconButton
            className={classes.menuButton}
            color="inherit" 
            margin="0"
            onClick={onMenuClicked}>
            <Menu />
          </IconButton>
          {
            // This button uses the Link component to redirect the user to the
            // login page. Note that BobaToolbar doesn't need withRouter
            // because it's built into the Link component.
          }
         
        </Toolbar>
        
      </AppBar>
      </Hidden>
    );
  }
}

export default withStyles(styles)(NavigationToolbar); 

