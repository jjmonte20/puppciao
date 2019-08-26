import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Grid, AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  }
}));

class Navbar extends Component {
    state = {
      anchorEl: null
    }

    handleClick = e => {
      this.setState({
        anchorEl: true
      })
    }
    
    handleClose = () => {
      this.setState({
        anchorEl: false
      })
    }

    render() {
        return (
          <div className={useStyles.root}>
            <AppBar position="static">
              <Toolbar>
                <Grid
                  justify="space-between"
                  container
                  spacing={24}>
                <IconButton 
                  edge="start" 
                  className={useStyles.menuButton} 
                  color="inherit" 
                  aria-label="menu"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={this.handleClick}
                  >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  keepMounted
                  open={this.state.anchorEl}
                  onClose={this.handleClose}
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu>
                <Button color="inherit">Login</Button>
                </Grid>
              </Toolbar>
            </AppBar>
          </div>
        );
    }   
}

export default withStyles(useStyles)(Navbar);

