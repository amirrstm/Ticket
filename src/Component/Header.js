import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    headerMain : {
        backgroundColor: '#1e1e1e',
    },
    headerText : {
        fontFamily: 'IranSans-Light',
        color : '#eee'
    }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
        <Grid container justify="center" className={classes.headerMain}>
            <h1 className={classes.headerText}>لیست بلیت ها</h1>
        </Grid>  
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
