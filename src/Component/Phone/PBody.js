import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Ticket from './Ticket';
import Data from '../Data.json' // Reload Data From Json File

const styles = theme => ({
    
});

class PBody extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            Tickets : []
        }
    }
        
    componentDidMount = () => {
        this.setState({
            Tickets : Data
        })
    };

    render() {
    const { Tickets } = this.state;
    return (
        <Grid container justify="center">
            <Header />
            
            {Tickets.map((val, idx) => {
                return (<Ticket key={idx} Data={val}/>)
            })}
            
        </Grid>  
    );
  }
}

PBody.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PBody);
