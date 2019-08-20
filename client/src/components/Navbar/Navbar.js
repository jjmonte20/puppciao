import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


class Navbar extends Component {

    render() {
        return (
            <div className={useStyles.root}>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    Photos
                  </Typography>
                </Toolbar>
              </AppBar>
            </div>
        );
    }   
}

export default withStyles(useStyles)(Navbar);

