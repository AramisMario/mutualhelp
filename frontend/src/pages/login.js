import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoginCard from "../components/loginCard";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    center:{
        margin:'auto',
        marginTop:'10vh',  
    }
  
  }));
const LoginPage = () =>{
    const classes = useStyles();
    return(
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xm={12} sm={12} sm={8} md={4}>
        </Grid>
        <Grid item className={classes.center} xm={12} sm={12} sm={8} md={4}>
            <LoginCard/>
        </Grid>
        <Grid item xm={12} sm={12} sm={8} md={4}>
        </Grid>
      </Grid>
    </div>
    );
}

export default LoginPage;