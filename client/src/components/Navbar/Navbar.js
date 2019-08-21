import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Grid, AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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

    render() {
        return (
          <div className={useStyles.root}>
            <AppBar position="static">
              <Toolbar>
                <Grid
                  justify="space-between"
                  container
                  spacing={24}>
                <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Button color="inherit">Login</Button>
                </Grid>
              </Toolbar>
            </AppBar>
          </div>
        );
    }   
}

export default withStyles(useStyles)(Navbar);

