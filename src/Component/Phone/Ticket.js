import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DirectionsSubway from '@material-ui/icons/DirectionsSubwayOutlined';
import LiveTv from '@material-ui/icons/LiveTv';
import Toys from '@material-ui/icons/Toys';
import EventNote from '@material-ui/icons/EventNote';
import { FaDigit } from '../../FaDigit';
import $ from 'jquery';

const PriceFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const styles = theme => ({
    mainContainer : {
        padding : 10,
        minHeight : 200,
    },
    ticketBody : {
        backgroundColor: '#fff',
        boxShadow : theme.shadows[2],
        borderRadius : 5,
    },


    cityName : {
        fontSize: '1.5rem',
        fontFamily: 'IranSans-Bold',
        margin: 15,
    },
    timeStyle : {
        fontSize: '1.3rem',
        fontFamily: 'IranSans-Bold',  
        margin: 15,
    },
    

    busContainer : {
        borderBottom : '2px solid #111'
    },
    busType : {
        margin : '25px 25px 5px 25px',
    },
    busText : {
        fontSize: '.754rem',
    },
    busButton : {
        color : '#ed2559',
        width : 40,
        height : 40,
        margin: '15px 5px',
        borderRadius: '50%',
        justifyContent : 'center',
        alignItems: 'center',
        display: 'flex',
        border : '1px solid #eee'
    },
    

    roadText : {
        fontSize: '1.5rem',
        fontFamily: 'IranSans-Light',
        margin: 15,
    },



    priceText : {
        fontSize: '1.3rem',
        fontFamily: 'IranSans-Light',
        margin: 10,
    },
    priceNumber : {
        fontSize: '1.7rem',
        fontFamily: 'IranSans-Bold',  
        margin: 15,
    },
    priceButton : {
        fontFamily: 'IranSans-Light',
        marginTop: 20,
        width : '100%',
        fontSize: '1.1rem',
        color : '#fff',
        backgroundColor: '#faba03',
        '&:hover' : {
            backgroundColor: '#faba03',
        }
    },



    bottomMore : {
        borderTop: '1px solid #eee',
        borderBottom: '1px solid #eee',
        transition : 'all .4s ease',
    },
    moreContainer : {
        padding : '10px 0',
        position: 'relative',
    },
    moreIcon : {
        position : 'absolute',
        top : 7,
        right: -30
    }
});

class Ticket extends Component {
    
    openDetails = (event) => {
        var parent = $(event.currentTarget).children()[1];
        $(parent).slideToggle()
    }

    render() {
    const { classes, Data } = this.props;
    return (
        <Grid container className={classes.mainContainer}>
            <Grid container className={classes.ticketBody}>
                <Grid item xs={12}> {/* This Grid For Ticket Information */}
                    <Grid container justify="center" alignItems="center">
                    
                        
                        {/* Origin Part */}
                        <Grid item style={{ padding : 20 }}>
                            <Grid container justify="center">
                                <p className={classes.cityName}>{Data.Origin}</p>
                            </Grid>
                            <Grid container justify="center">
                                <p className={classes.timeStyle}>{FaDigit(String(Data.OriginTime))}</p>
                            </Grid>
                        </Grid>

                        {/* Destenation Part */}
                        <Grid item style={{ padding : 20 }}>
                            <Grid container justify="center">
                                <p className={classes.cityName}>{Data.Destenation}</p>
                            </Grid>
                            <Grid container justify="center">
                                <p className={classes.timeStyle}>{FaDigit(Data.DestenationTime)}</p>
                            </Grid>
                        </Grid>

                        {/* RoadDay Part */}
                        <Grid container style={{ padding : 20 }}>
                            <Grid container justify="center">
                                <p className={classes.roadText}>روز حرکت</p>
                            </Grid>
                            <Grid container justify="center">
                                <p className={classes.timeStyle}>{FaDigit(Data.RoadDay)}</p>
                            </Grid>
                        </Grid>

                        {/* Bus information */}
                        <Grid item style={{ padding : 20 }}>
                            <Grid container justify="center" className={classes.busContainer} alignItems="center">
                                {Data.BusInfo.map((val, idx) => {
                                    return(
                                        <Grid item className={classes.busType}>
                                            <p className={classes.busText}>{FaDigit(val)}</p>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            <Grid container justify="center">
                                <p className={classes.busButton}><LiveTv style={{ fontSize : 26 }}/></p>
                                <p className={classes.busButton}><DirectionsSubway style={{ fontSize : 26 }}/></p>
                                <p className={classes.busButton}><Toys style={{ fontSize : 26 }}/></p>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Details Part */}
                    <Grid container justify="center" className={classes.bottomMore} onClick={this.openDetails}>
                        <p className={classes.moreContainer}><EventNote className={classes.moreIcon}/> جزئیات</p>
                        <div style={{ height : 200, display : 'none' }}></div>
                    </Grid>
                </Grid>

                
                <Grid item xs={12}> {/* This Part For Price Of Ticket*/}
                    <Grid container justify="center" alignItems="center" style={{height : '100%'}}>
                        <Grid item style={{ padding : 20 }}>
                            <Grid container justify="center">
                                <p className={classes.priceText}>هزینه بلیط‌ برای هرنفر</p>
                            </Grid>
                            <Grid container justify="center">
                                <p className={classes.priceNumber}>{FaDigit(PriceFormat(Data.Price))} ریال</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{position : 'sticky', bottom : 0}}>
                    <Button variant="contained" className={classes.priceButton}>
                        تغییر بلیط
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
  }
}

Ticket.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ticket);
