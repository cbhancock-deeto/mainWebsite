import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Toolbar from "../Layout/Toolbar/Toolbar";



const useStyles = makeStyles((theme) => ({
    portfolioBackground: {
      backgroundColor: `${theme.palette.primary.main}`,
      height: "100vh",
    },
    portfolioHeading: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: "200",
        fontSize: "2rem",
        textAlign: "center",
        paddingBottom: 50,
        paddingTop: 70,
        color: `${theme.palette.secondary.main}`,
        [theme.breakpoints.down("xs")]: {
          fontWeight: "500",
          textAlign: "center",
          paddingBottom: 18,
        },
      },
}));


function Portfolio(){
    const classes = useStyles()
    return (
        <Grid container
        direction="column" 
        className={classes.portfolioBackground}>
            <Toolbar />
            <Typography className={classes.portfolioHeading}>Portfolio</Typography>
        </Grid>
    )
}

export default Portfolio;